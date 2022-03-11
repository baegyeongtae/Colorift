FROM tensorflow/tensorflow:2.8.0-gpu

WORKDIR /app
ADD . /app/

RUN apt-get update
RUN apt-get -y install libgl1-mesa-glx
RUN pip install -r requirements.txt

EXPOSE 8000
CMD ["gunicorn", "-b", ":8000", "config.wsgi:application"]

