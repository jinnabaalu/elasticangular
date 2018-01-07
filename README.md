# Elasticsearch with angular 5

## Up and run with ELasticsearch

1. (Installation and Get started guide from angular-cli)https://github.com/angular/angular-cli#installation

2. Create a docker-compose file to run the Elasticsearch as docker container or you can also install on your host machine.

### Run elasticsearch

#### Container

**elasticsearch.yml**

```yml
version: '3.3'
services:
  elasticsearch1:
    image: docker.elastic.co/elasticsearch/elasticsearch:6.1.1
    environment:
      ES_JAVA_OPTS: '-Xms256m -Xmx256m'
      cluster.name: es-cluster
      node.name: es1
      network.bind_host: 0.0.0.0
      discovery.zen.minimum_master_nodes: 1
      discovery.zen.ping.unicast.hosts: elasticsearch1
      xpack.security.enabled: 'false'
      xpack.monitoring.enabled: 'false'
      xpack.watcher.enabled: 'false'
      xpack.ml.enabled: 'false'
      http.cors.enabled : 'true'
      http.cors.allow-origin : "*"
      http.cors.allow-methods : OPTIONS, HEAD, GET, POST, PUT, DELETE
      http.cors.allow-headers : X-Requested-With,X-Auth-Token,Content-Type, Content-Length
      logger.level: debug
    volumes:
      - esdata1:/usr/share/elasticsearch/data
    ports:
      - 9200:9200
      - 9300:9300
volumes:
  esdata1:
    driver: local

```

```bash
docker-compose -f elasticsearch.yml up -d
```

NOTE : When you run elastic search you will face "Bootstrap checks failing" of "max virtual memory areas vm.max_map_count [65530] is too low, increase to at least [262144]"

Follow this instructions to resolve your issue 

(Elasticsearch - Bootstrap checks failing)[https://stackoverflow.com/questions/42300463/elasticsearch-5-x-bootstrap-checks-failing/47211716#47211716]

**OR**

### You can also install on host

- (Installation)[https://www.elastic.co/guide/en/elasticsearch/reference/current/_installation.html]

- CORS need to be activated to connect to the elasticsearch from the application.

## Development server

Install npm packages, if it is done ignore.

```bash
npm install
```

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

# Production with Docker

- Comming.....