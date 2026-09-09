
# Campus Rate

## Description

REST API which allows student to consult places or services on the campus. 
Also, allows the students to rate these places.

## Fonctionalities :
- Register and update a place on the campus, with informations such as : description, category, address, services and status
- Register and update a rating of a place on the campus, with information such as : author, rating and comment
- Displays a single rating or place
- Displays a list of ratings of a places
- Displays all the places in page format with filtering options such as : category, page, and limit (places per page)

## Configurations :
### .env
Copy the .env.example and name it .env, fill the following info:
- PORT : number of the port to run the api on
- DATA_FILE_PATH : where to create the json databases
### common:
- everything that is accessible globally should be under src/common

## Routes & Dtos:
### Conceptual Routes & Dtos

[Click here to navigate to initial concepts](https://github.com/Guerre450/TP1-CampusRate/tree/main/docs/initial_concepts)



## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

