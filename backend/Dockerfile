FROM python:3.8
WORKDIR /app

ADD . /app/
RUN pip install -r requirements.txt

EXPOSE 8000
CMD ["gunicorn", "-b", ":8000", "config.wsgi:application"]
