# Node Express app with nginx postgres nodemon dev cluster

## Prerequisites

Install [Docker](https://www.docker.com/) on your system.

* [Install instructions](https://docs.docker.com/installation/mac/) for Mac OS X

Install [Docker Compose](http://docs.docker.com/compose/) on your system.

* ``curl -L https://github.com/docker/compose/releases/download/1.2.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose``
* ``chmod +x /usr/local/bin/docker-compose``


## Setup

Run `npm install` in node folder

Run `docker-compose build`. It will

* install [nodemon](https://github.com/remy/nodemon) globally in your container
* instruct the container to execute `nodemon index.js` on start up.

## Start containers

Run `docker-compose up` to
* create postgres container  
* create elastic search container
* create 2 node app containers link to postgres and elastic search
* create a nginx container and proxy to 2 node app containers
The app should then be running on your docker daemon on port 80 (On OS X you can use `boot2docker ip` to find out the IP address).


## Connect postgres from terminal

Run `boot2docker ip` to get boot2docker host 

psql -h [boot2docker host] -U youruser


## Destroy containers

Run `docker-compose rm`




## ToDo
redis


# How to use this repo after install docker-machine

## docker

clone this repo into your own disk

Try for the following command

Run `docker-machine version` 

    `docker-machine ls` 

    `docker-machine env default`  

    `docker-machine env`


start the default container `docker-machine start` 

    `docker-machine run hello-world` 

if doesn't show hello from docker then try the following command

    `eval "$(docker-machine env default)"`

in the repo run `docker-compose up`

run `docker-compose up` everytime when you try to build your website

done!


