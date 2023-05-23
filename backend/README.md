# Untitled Project

## Project Information

Npm version: 8.19.2
Node version: 18.10.0

## Installation Instructions

1. Clone the repo with `git clone git@github.com:shanekim28/coletsgo.git`
2. Install node [here](https://nodejs.org/dist/v18.10.0/) if not already installed. For Windows, use node-v18.10.0-x64.msi. For Mac, use node-v18.10.0.pkg. After installing, you may need to restart your computer.
3. Navigate to the project directory with `cd backend`
4. Install express with `npm install express`
5. Create a .env file with `touch .env` and fill it in as needed. See the [example below](#sample-env).
6. Create a database container with `docker compose up -d`. If you don't have docker, install it [here](https://www.docker.com/).
7. Migrate the database with `npx sequelize-cli db:migrate`

## Running the application

Once you've followed the [installation instructions](#installation-instructions), run the app with `node server.js`

## Sample .env

```
PORT=3001

# Postgres settings
POSTGRES_USER=dev
POSTGRES_PASSWORD=asdf
PGHOST=localhost
PGPORT=27015
POSTGRES_DB=backend
```
