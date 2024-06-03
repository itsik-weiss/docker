#!/bin/bash

public_ip=$(curl -s https://api.ipify.org)
export HOST_IP=$public_ip

if [[ -z "$HOST_IP" ]]; then
  echo "Failed to retrieve the public IP address"
  exit 1
fi

sudo -E docker-compose up --build