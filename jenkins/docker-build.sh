#!/bin/sh

# Default git commit number
GIT_COMMIT=unspecified
# Get current get commit number
LABEL=$(git log -1 --format=%h) 


echo "REACT_APP_STOAURL "$REACT_APP_STOAURL
echo "REACT_APP_AGORAURL "$REACT_APP_AGORAURL
# Build docker of current directory
docker build --build-arg REACT_APP_STOAURL=$REACT_APP_STOAURL \
--build-arg REACT_APP_AGORAURL=$REACT_APP_AGORAURL -t rnssolutions/boa-wallet:$LABEL .
