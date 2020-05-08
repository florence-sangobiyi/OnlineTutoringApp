# ONLINE-TUTORING-APP

Simple tutoring app RESTful API

## Prerequisite
- NodeJS
- Sequelize CLI
- Express

## Installation
- Clone this repository
- Add .env file as described in .env.example
- Install packages with $ npm install
- Migrate database with $ sequelize db:migrate

## Usage
- Start development environment with $ npm run start:dev
- Start application with $ npm start


## Endpoints
For Authenticated request i.e request for admins and authenticated user, your request should have an authorization of the format `Authorization: JWT_token`. JWT_token is issued when user successfully login.

### Categories
- POST /api/v1/categories - Allow admins create a new category
  - Sample request body
    ```json
      {
        "name": "primary"
      }
    ```
- POST /api/v1/categories/:id/subjects
  - Sample request body
    ```json
      {
        "name": "Mathematics"
      }
    ```
- GET /api/v1/categories - Returns all categories to authenticaticated users
- GET /api/v1/categories/:id/subjects - Returns all subjects in a specified category to authenticated user


### Users
- POST api/v1/users/sign-in
    - Sample login request body
      ```json
      {
        "email": "alexander@hamilton.com",
        "password": "revolution"
      }
      ```

- POST api/v1/users/sign-up
    - Sample signup request body
      ```json
      {
        "email": "alexander@hamilton.com",
        "firstName": "Alexamder",
        "lastName": "Hamilton",
        "password": "revolution",
        "role": "tutor"
      }
      ```

### Lessons
- GET /api/v1/lessons - Allows admin users to fetch all lessons
- POST /api/v1/lessons - Allows authenticated user to book a lesson
    - Sample lesson booking request
    ```json
    {
      "name": "JAMB preparatory",
      "tutor_id": 2
    }
    ```
- PATCH /api/v1/lessons/:id - Allow admins to update a lesson
   - Sample lesson update request
   ```json
   {
     "name": "Extra curricular classes"
   }
   ```
- DELETE /api/v1/lessons/:id - Allow admins to delete specified lesson

### Subjects
- PATCH /api/v1/subjects/:id - Allow admins to update subject
  - Sample request body
  ```json
  {
    "name": "Fine Art"
  }
  ```
- DELETE /api/v1/lessons/:id - Allow admins to delete specified lesson
