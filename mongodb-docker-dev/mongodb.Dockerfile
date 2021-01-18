FROM mongo:4.0.22

COPY ./init-scripts/ /docker-entrypoint-initdb.d/

RUN useradd --create-home -g users ivan

WORKDIR /home/ivan
