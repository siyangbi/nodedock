# Node Express app with nginx postgres nodemon dev cluster

## Prerequisites

Install [Docker](https://www.docker.com/) on your system.

* [Install instructions](https://docs.docker.com/installation/mac/) for Mac OS X



# How to use this repo after install docker-machine

## docker

clone this repo into your own disk

Try the following command

Run `docker-machine version` 

Run `docker-machine ls` 

Run `docker-machine env default`  

Run `docker-machine env`


start the default container  Run `docker-machine start` 

Run `docker-machine run hello-world` 

if doesn't show hello from docker then try the following command

Run `eval "$(docker-machine env default)"`

in the repo run `docker-compose up`

run `docker-compose up` everytime when you try to build your website

done!



## Start containers

Run `docker-compose up` to
* create postgres container  
* create elastic search container
* create 2 node app containers link to postgres and elastic search
* create a nginx container and proxy to 2 node app containers
The app should then be running on your docker daemon on port 80 (On OS X you can use `docker-machine env` to find out the IP address).


## Connect postgres from terminal

Run `docker-machine env` to get docker-machine host 

psql -h [docker-machine host] -U youruser


## Destroy containers

Run `docker-compose rm`


## Setup nodejs package 
-- ignore this part

Run `npm install` in node folder

Run `docker-compose build`. It will

* install [nodemon](https://github.com/remy/nodemon) globally in your container
* instruct the container to execute `nodemon index.js` on start up.

## ToDo
redis


