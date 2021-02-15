FROM tiangolo/uvicorn-gunicorn-fastapi:python3.8
COPY ./app /app 
WORKDIR /app
COPY requirements.txt requirements.txt
RUN pip install pip --upgrade
RUN pip install -r requirements.txt
COPY . /app
# CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port",  "8000","--reload"]