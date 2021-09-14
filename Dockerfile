ARG VERSION=13.14.0
ARG PORT=3000

FROM node:${VERSION}-slim
RUN npm i -g serve
RUN apt-get update && apt-get install -y \
  curl build-essential software-properties-common

ARG REACT_APP_STOAURL
ARG REACT_APP_AGORAURL

WORKDIR /app
COPY  . /app
RUN export NODE_OPTIONS=--max_old_space_size=4096
RUN npm i
RUN REACT_APP_STOAURL=$REACT_APP_STOAURL \
REACT_APP_AGORAURL=$REACT_APP_AGORAURL npm run build

HEALTHCHECK --interval=5s --timeout=2s --retries=12 \
  CMD curl --silent --fail localhost:${PORT} || exit 1

EXPOSE ${PORT}
CMD ["serve","-s", "build", "-l", "3020"]
