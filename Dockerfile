FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install psycopg2 dependencies.
RUN apt-get update && apt-get install -y \
    libpq-dev \
    gcc \
    curl \
    && rm -rf /var/lib/apt/lists/*

RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - \
    && apt-get update -y \
    && apt-get install -y nodejs

RUN npm install -g yarn

WORKDIR /code

COPY . /code

RUN cd frontend ; yarn install ; yarn run build

RUN pip install uv
RUN uv venv
RUN uv pip install -r requirements.txt

RUN .venv/bin/python manage.py collectstatic --noinput

EXPOSE 8080

CMD [".venv/bin/gunicorn", "--bind", ":8080", "--workers", "3", "--threads", "2", "--max-requests", "1000", "--max-requests-jitter", "200", "--timeout", "0", "hello_vite.wsgi"]
