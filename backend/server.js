const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');

// Setting up config file:
dotenv.config({path: "backend/config/config.env"})

// Connect to Database
connectDatabase();

// Handle Uncaught exceptions
process.on('uncaughtException', err => {
    console.log('ERROR:', err.stack);
    console.log('Shutting down due to uncaught exception');
    process.exit(1);
})


const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
})

// Handle Unhandled Promise rejections
process.on('unhandledRejection', err => {
    console.log('ERROR:', err.message);
    console.log(' Shutting down server due to Unhandled rejection');
    server.close(() => {
        process.exit(1);
    });
})

