#!/bin/bash
echo "${DOCKER_PASSWORD}" | docker login -u "${DOCKER_USERNAME}" --password-stdin registry.aragon.codes
docker push registry.aragon.codes/miguel.aragon.codes