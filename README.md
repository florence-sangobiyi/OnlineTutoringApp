ONLINE-TUTORING-APP

Simple tutoring app using api

Prerequisite
NodeJS
Sequelize CLI
Express

Installation
Clone this repository
Add .env file as described in .env.example
Install packages with $ npm install
Migrate database with $ sequelize db:migrate

Usage
Start development environment with $ npm run start:dev
If you would like to use production build instead
Generate production build with $ npm run build
Copy sequelize config with $ npm run config
Start application with $ npm start

Testing
Migrate test database with $ NODE_ENV=test sequelize db:migrate
Run Tests with $ npm test

Endpoints
Roles
GET /api/v1/users
GET /api/v1/categories
PUT /api/v1/roles/:id
DELETE /api/v1/roles/:id


Users
GET /api/v1/users, /api/v1/users/:id
POST /api/v1/users
GET /api/v1/subjects
GET /api/v1/lessons
POST api/v1/users/sign-in


 i. Sample login request body
  {
    "email": "alexander@hamilton.com",
    "password": "revolution"
  }
 ii. Sample signup request body
  {
    "username": "ahamilton",
    "email": "alexander@hamilton.com",
    "firstName": "Alexamder",
    "lastName": "Hamilton",
    "password": "revolution",
    "RoleId": 12
  }

PUT /api/users/:id
 i. Sample request body
  {
    "firstName": "Alex",
    "RoleId": 1
  }
DELETE /api/users/:id

POST api/v1/users/sign-in



