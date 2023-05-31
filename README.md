# eCommerce Project - eBlej


This eCommerce project leverages the power of the MERN stack, combined with [Redux](https://redux.js.org/) for efficient state management. It utilizes [React](https://reactjs.org/),a JavaScript library for building user interfaces, along with [Create React App](https://create-react-app.dev/) for compiling and bundling the frontend code. [MongoDB](https://www.mongodb.com/), a flexible NoSQL database, is employed to handle the storage of product catalogs, user profiles, orders, and other essential data. [Node.js](https://nodejs.org/en), a server-side runtime environment, works in tandem with [Express.js](https://expressjs.com/), a web application framework, to handle backend logic, routing, and communication with the MongoDB database.

![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white&style=for-the-badge) [![Express.js](https://img.shields.io/badge/-Express.js-000000?logo=express&logoColor=white&style=for-the-badge)](https://expressjs.com/) ![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white&style=for-the-badge) ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=for-the-badge) [![Redux](https://img.shields.io/badge/-Redux-764ABC?logo=redux&logoColor=white&style=for-the-badge)](https://redux.js.org/) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/-Prettier-F7B93E?logo=prettier&logoColor=white&style=for-the-badge) 



## Getting Started
To get a local copy up and running follow these simple example steps.



### Prerequisites

Before getting started, make sure you have the following software installed:
- [MongoDB Server](https://www.mongodb.com/try/download/community) - Download and install MongoDB Server for your operating system.
- [MongoDB Compass](https://www.mongodb.com/try/download/compass) - Download and install MongoDB Compass, a visual interface for working with MongoDB.
- [Node.js](https://nodejs.org/en/download/) - Download and install Node.js, which includes npm, the package manager for Node.js modules.

 Recommended:
- `node` : `>=18.16.0`.
- `MongoDB Server`  : `>=6.0.6` and `MongoDB Compass GUI` : `1.37.0 - Stable`.
-  MongoDB Compass GUI it is preferred but not necessary, if you are familiar with writing commands in MongoDB.



### Directory Structure in the frontend folder

| Name               | Description                                                                                        |
| ------------------ | -----------------------------------------------------------------------------------------------    |
| **public/**        | Static assets (images).                                                                            |
| **src/components** | React components that are used for specific pages.                                                 |
| **src/actions**    | Indicate what can possibly be done to the states.                                                  |
| **src/reducers**   | Indicate transformations of the states.                                                            |
| **src/constants**  | Provide a way to define and manage fixed values in a central location.                             |



### Directory Structure in the backend folder

| Name               | Description                                                                                        |
| ------------------ | -----------------------------------------------------------------------------------------------    |
| **config**         | Configuration of the environment variables.                                                        |
| **controllers**    | Managing back end pages and responding directly to HTTP requests.                                  |
| **models**         | Connecting them to database and using them in controllers.                                         |
| **database**       | Setting up the database.                                                                           |
| **middlewares**    | Intercepting and processing requests and responses.                                                |
| **tests**          | Unit tests and integration tests for testing the functionality and reliability of the backend code.|
| **routes**         | Route handlers and endpoint definitions for the backend API.                                       |
| **utils**          | Reusable functionality and assist in various tasks throughout the backend application.             |



### Testing with Mocha

We have used the Mocha framework for testing our application. [Mocha](https://mochajs.org/) is a popular JavaScript testing framework that provides a clean and easy-to-use interface for writing test cases.

#### Running tests

To run the tests, follow these steps:
- Make sure you have all the dependencies installed by running `npm install`.
- Execute the tests using the command `npm test`.
- Mocha will then run the test suites and display the results in the terminal.



### API Documentation with Swagger

We have used Swagger for documenting our API endpoints and models. 
[Swagger](https://swagger.io/docs/) provides a standardized way to describe and visualize APIs, making it easier for developers to understand and interact with the endpoints.



### Setup
- Clone the repository.
- Install all dependencies at the root folder using: - `npm install`.
- Navigate to the frontend directory with the cd frontend command and install all dependencies using: - `npm install`.



### Env Variables
- Remember to add config variables values in the config.env file in backend/config folder.



### Start dev server
- `npm run dev`



### Start frontend 
- `npm start`



#### Seed the database
- `npm run seeder`



#### Authors:

<div align="left">

| [Albin Hashani](https://github.com/AlbinHashanii) | [Ardit Zubaku](https://github.com/ArditZubaku) | [Arjana Tërnava](https://github.com/ArjanaaTernava) | [Erza Osmani](https://github.com/erzaosmani) |
| :---: | :---: | :---: | :---: |
| <img src="https://github.com/AlbinHashanii.png" width="40" height="40"> | <img src="https://github.com/ArditZubaku.png" width="40" height="40"> | <img src="https://github.com/ArjanaaTernava.png" width="40" height="40"> | <img src="https://github.com/erzaosmani.png" width="40" height="40"> |

</div>



