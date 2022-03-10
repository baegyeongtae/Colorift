FROM tensorflow/tensorflow:2.8.0-gpu

WORKDIR /app

ADD . /app/

RUN pip install -r requirements.txt

EXPOSE 8000
CMD ["gunicorn", "-b", ":8000", "config.wsgi:application"]
