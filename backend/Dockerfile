FROM python:3.8
WORKDIR /app

ADD . /app/

RUN apt-get update && apt-get install -y python3-opencv
RUN pip install cmake==3.22.2
RUN pip install -r requirements.txt

EXPOSE 8000
CMD ["gunicorn", "-b", ":8000", "config.wsgi:application"]
