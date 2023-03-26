CODE:

# base image
FROM node:14.15.4-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install --silent
RUN npm install react-scripts@4.0.3 -g --silent

# add app
COPY . /app

# start app
CMD ["npm", "start"]