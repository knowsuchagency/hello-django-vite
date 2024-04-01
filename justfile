runserver:
    concurrently "cd frontend ; yarn dev" "DEBUG=True .venv/bin/python manage.py runserver"

init:
    uv venv
    uv pip install -r requirements.txt
    cd frontend ; yarn install

build:
    cd frontend ; yarn build
    .venv/bin/python manage.py collectstatic --noinput
