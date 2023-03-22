# Order Demo

This repository contains a simple demonstration of a microservices-based application with E2E trace visualization using Helios telemetry tool. The application consists of three microservices: user-service, payment-service, and order-service.

The order-service microservice fetches user details from the user-service and creates a payment using the payment-service before placing an order for the user. In this scenario, the order-service is running some inefficient database queries, causing a bottleneck in the application.

To identify and fix this bottleneck, Helios telemetry tool is used for E2E trace visualization. The tool allows for easy identification of the location of the bottleneck by analyzing the traces of recent requests and identifying which endpoints are slowing down the application.

Once the location of the bottleneck is identified, root cause analysis is conducted to identify the reasons for the bottleneck. The analysis reveals that inefficient database queries are the root cause of the bottleneck.

The readme file in this repository provides detailed instructions for running the application and using Helios telemetry tool for bottleneck analysis.

## Repository contents:

- user-service: This directory contains the code for the user-service microservice.
- payment-service: This directory contains the code for the payment-service microservice.
- order-service: This directory contains the code for the order-service microservice.
- docker-compose.yml: This file contains the configuration for running the microservices using Docker Compose.
- README.md: This file provides instructions for running the application and using Helios telemetry tool for bottleneck analysis.

## Instructions for running the application:

1. Clone this repository:

`git clone https://github.com/Mahesh419/order-demo.git`

2. Navigate to the cloned repository:

`cd order-demo`

3. Start the application using Docker Compose:

`docker-compose up`

4. Navigate to the "Traces" tab in the Helios dashboard to view traces of recent requests and identify the location of the bottleneck.


*Note: This is a demonstration application intended for educational purposes only. The code in this repository may not be suitable for production use without modifications and proper testing.*
