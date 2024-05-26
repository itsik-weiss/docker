#!/bin/bash

HOST_IP=$(hostname -I | awk '{print $1}')
export HOST_IP

docker-compose up