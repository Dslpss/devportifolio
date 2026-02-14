# Build Stage
FROM maven:3.8-openjdk-8 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
# Build the application
RUN mvn clean package -DskipTests

# Runtime Stage
FROM openjdk:8-jre-alpine

# Define Mule Version
ENV MULE_VERSION=4.4.0
ENV MULE_HOME=/opt/mule

# Install necessary tools
RUN apk --no-cache add bash curl unzip

# Download and Install Mule Kernel (Community Edition) from Maven Repo
RUN cd /opt && \
    curl -L https://repository.mulesoft.org/nexus/content/repositories/releases/org/mule/distributions/mule-standalone/${MULE_VERSION}/mule-standalone-${MULE_VERSION}.tar.gz -o mule-standalone.tar.gz && \
    tar -xf mule-standalone.tar.gz && \
    mv mule-standalone-${MULE_VERSION} mule && \
    rm mule-standalone.tar.gz

WORKDIR ${MULE_HOME}

# Copy the built application from the build stage to the apps directory
COPY --from=build /app/target/*.jar ${MULE_HOME}/apps/

# Expose HTTP Port
EXPOSE 8081

# Define volume for logs
VOLUME ["${MULE_HOME}/logs"]

# Start Mule
CMD ["./bin/mule"]
