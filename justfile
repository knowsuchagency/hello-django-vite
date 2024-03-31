runserver:
    concurrently "cd frontend ; yarn dev" "DEBUG=True python manage.py runserver"

init:
    uv venv
    uv pip install -r requirements.txt
    cd frontend ; yarn install
