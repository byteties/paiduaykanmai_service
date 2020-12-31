FROM registry.thinknet.co.th/sredev/node:10.15
COPY . /usr/src/app/
RUN yarn install --production=true --no-cache && yarn build