# nosql-velov / backend

REST API developped in Node.js

## Installation 
To use this project you' ll need [docker](https://docs.docker.com/install/) and [docker-compose](https://docs.docker.com/compose/install/) installed. 

## Note
To be efficient the instances of a mongodb cluster need to be installed on different physical machines, 
this compose setup is only for testing and practicing purposes.  

## Usage 
```bash
docker-compose up 
```

## Containers 

`mongo`, `mongo-1` and `mongo-2` are the three mongo instances forming a replica set.

`mongo-rs-init` is in charge of initializing the replica set. 

`node` will run the REST api and the data import scripts. 
