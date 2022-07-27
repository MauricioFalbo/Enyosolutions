dock
# Challenge Enyosolutions

## Technologies
Project is created with:
* NodeJs
* Express
* Docker
	
## Setup
To run this project, install it locally using yarn and docker:

```
$ docker run --name myslq -p 3306:3306 
  -e MYSQL_ROOT_PASSWORD=root 
  -e MYSQL_DATABASE= CHOOSE_DB 
  -e MYSQL_USER= CHOOSE_USER
  -e MYSQL_PASSWORD= CHOOSE_PASS
  -d mysql:5.7

$ yarn
$ yarn knex:latest
$ yarn start
```

## Endpoints
```
[POST] - http://localhost:5000/api/articles/import?siteRssUrl=https%3A%2F%2Fwww.lemonde.fr%2Frss%2Fune.xml
[GET] - http://localhost:5000/api/articles/
```
