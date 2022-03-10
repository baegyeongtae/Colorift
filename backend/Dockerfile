FROM nvidia/cuda:11.4.0-base-ubuntu20.04

WORKDIR /app
ADD . /app/

ENV DEBIAN_FRONTEND=noninteractive

RUN apt update
RUN apt-get install -y python3 python3-pip
RUN apt-get install -y python3-opencv
RUN pip install cmake==3.22.2
RUN pip install tensorflow-cpu
RUN pip install -r requirements.txt

EXPOSE 8000
CMD ["gunicorn", "-b", ":8000", "config.wsgi:application"]

