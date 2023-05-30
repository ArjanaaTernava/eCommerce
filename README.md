# eCommerce Project - eBlej

This project is done using [React](https://reactjs.org/) and [Create React App](https://create-react-app.dev/) for compiling & bundling, also using [MongoDB](https://www.mongodb.com/), a popular NoSQL database and [Node.js](https://nodejs.org/en) for the server side development.
- ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=for-the-badge) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/-Prettier-F7B93E?logo=prettier&logoColor=white&style=for-the-badge) ![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white&style=for-the-badge)
![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white&style=for-the-badge)


## Getting Started
To get a local copy up and running follow these simple example steps.


### Prerequisites
- Recommended `node` : `>=16.13.0`.
- MongoDB Server : `>=6.0.6` and MongoDB Compass GUI : `1.37.0 - Stable`.


### Directory Structure in the frontend folder

| Name               | Description                                                                                    |
| ------------------ | -----------------------------------------------------------------------------------------------|
| **public/**        | Static assets (imgages).                                                                       |
| **src/components** | React components that are used for specific pages.                                             |
| **src/actions**    | Indicate what can possibly be done to the states.                                              |
| **src/reducers**   | Indicate transformations of the states.                                                        |


### Directory Structure in the backend folder

| Name               | Description                                                                                    |
| ------------------ | -----------------------------------------------------------------------------------------------|
| **config**         | Configuration of the environment variables.                                                    |
| **controllers**    | Managing back end pages and responding directly to HTTP requests.                              |
| **models**         | Connecting them to database and using them in controllers.                                     |
| **database**       | Setting up the database.                                                                       |
| **middlewares**    | Intercepting and processing requests and responses.                                            |


### Setup
- Clone the repository.
- Install all dependencies at the root folder using: - `npm install`.
- Navigate to the frontend directory with the cd frontend command and install all dependencies using: - `npm install`.


### Env Variables
- Remember to add config variables values in the config.env file in backend/config folder.


#### Start dev server
- `npm run dev`


#### Start frontend server
- `npm start`


#### Seed the database
- `npm run seeder`


##### Authors:
- [Albin Hashani](https://github.com/AlbinHashanii)
- [Ardit Zubaku](https://github.com/ArditZubaku)
- [Arjana Tërnava](https://github.com/ArjanaaTernava)
- [Erza Osmani](https://github.com/erzaosmani)




