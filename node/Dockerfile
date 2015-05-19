FROM node:0.10.38

RUN mkdir /src

RUN npm install -g nodemon

# Define working directory
WORKDIR /src
ADD package.json /src/package.json
RUN npm install

# Expose port
EXPOSE  8080

# Run app using nodemon
CMD ["nodemon", "/src/index.js"]