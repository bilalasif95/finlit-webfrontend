#!/bin/sh

# Default git commit number
GIT_COMMIT=unspecified
# Get current get commit number
LABEL=$(git log -1 --format=%h)


echo "REACT_APP_API "$REACT_APP_API
# Build docker of current directory
docker build --build-arg REACT_APP_API=$REACT_APP_API -t rnssolutions/finlit:$LABEL .
