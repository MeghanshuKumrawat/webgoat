# Baseimage specially for raspberry pi usage
FROM resin/rpi-raspbian:jessie
VOLUME /tmp
# Installing openjdk-8-headless like in the standard Webgoat Docker container
RUN apt-get update && apt-get install -y \
      openjdk-8-jre-headless

# Create non-root user for security
RUN useradd --home-dir /home/webgoat --create-home -U webgoat
RUN mkdir -p /home/webgoat/.webgoat && chown -R webgoat:webgoat /home/webgoat

ADD webgoat-server-8.0-SNAPSHOT.jar /home/webgoat/webgoat.jar
RUN sh -c 'touch /home/webgoat/webgoat.jar' && chown webgoat:webgoat /home/webgoat/webgoat.jar

# Switch to non-root user
USER webgoat
WORKDIR /home/webgoat

ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","webgoat.jar"]