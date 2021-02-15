# Fullstack bookmarks manager (WIP)

Simple CRUD app based on FastAPI, SQL and React 


## Start

To start the backend run the docker compose file in /backend

```shell
sudo docker-compose up

```
To start the frontend run npm start in /frontend

```shell
npm start
```
The backend runs on localhost:80. Doc is accesible at localhost:80/docs
Frontend runs at localhost:3000


## Todo

- Replace SQLlite with Postgre running in a container
- Create a docker-compose.yml to start the whole project
- Implement a "tag" field to the "Bookmark" entity using "Array" as default type
- Implement Delete (frontend)
- Implement Update functionality


## License 

MIT