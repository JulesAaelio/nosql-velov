#!/bin/sh
set -e
until /usr/bin/mongo --host ${HOST} --eval "print(\"Connection established successfully. Will initialize rs\")"; do
  >&2 echo "Mongo is unavailable - sleeping"
  sleep 1
done

>&2 echo "Connection with mongo established - Executing command"

/usr/bin/mongo --host ${HOST} /scripts/rs-init.js
