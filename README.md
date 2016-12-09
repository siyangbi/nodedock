# Nodedock
Nodedock is a Docker nodejs development environment. It facilitates running **nodejs** Apps on **Docker**. 

### Supported Software (Containers)

- **Database Engines:**
	- MySQL
- **NoSQL Engines:**
	- Redis
	- ElasticSearch and Kibana
- **Message Queueing Systems:** [todo]
	- RabbitMQ

## Installation


1 - Clone this repository on your project root directory:

```bash
git submodule add https://github.com/siyangbi/nodedock.git
```
>If you are not already using Git for your nodejs project, you can use `git clone` instead of `git submodule`.


2 - Setup project folder structure like this:

```
- project
    - nodedock
    - bin/www
    - src
    - test
    - package.json
```
> You can follow the [nodedock-example](https://github.com/siyangbi/nodedock-example) to setup your project as well

3 - Run your docker-compose command inside nodedock folder

```
docker-compose up 
```

	
	
