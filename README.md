# Nodedock
Nodedock is a Docker nodejs development environment. It facilitate running **nodejs** Apps on **Docker**. 

### Supported Software (Containers)

- **Database Engines:**
	- MySQL
- **NoSQL Engines:**
	- Redis
	- ElasticSearch
- **Message Queueing Systems:**
	- RabbitMQ

## Installation


1 - Clone this repository on your project root directory:

```bash
git submodule add https://github.com/siyangbi/nodedock.git
```
>If you are not already using Git for your nodejs project, you can use `git clone` instead of `git submodule`.


1 - Setup project folder structure like this:

```
- project
    - nodedock
    - bin/www
    - src
    - test
    - package.json
```


2 - Run your docker-compose command

```
docker-compose up 
```

	
	
