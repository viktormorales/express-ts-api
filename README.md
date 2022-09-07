# An ExpressJS API REST server with TypeScript

## How to install
* Clone the repo
* Move inside project directory: `cd express-ts-api`
* Rename .env-sample: `mv .env-sample .env`
* Install NodeJS dependencies declared on package.json: `npm install`

## How to run
* Compile and run: `npm run start`
* Run on DEV mode using Nodemon: `npm run dev`

## How to test
Open a terminal (console) and send a GET request to the following URLs, replacing `PORT` with the PORT information on your `.env` file:
* `curl http://localhost:PORT/v1`
* `curl http://localhost:PORT/v1/about`
* `curl http://localhost:PORT/v1/posts`
* `curl http://localhost:PORT/v1/posts/2`

Send a POST request:
* `curl -d "title=Hola Mundo&description=Mi primer articulo falso." http://localhost:PORT/v1/posts`
