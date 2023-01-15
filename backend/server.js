const app = require('./app')
const dotenv = require('dotenv');
const path = require("path");
const connectDatabase = require('./config/database');

dotenv.config({ path: path.join(__dirname, "config/.env") })
connectDatabase()

const port = process.env.PORT || 5000

const server = app.listen(port, () => {
    console.log(`Server Running on ${port} in ${process.env.NODE_ENV}`);
})

process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    console.log('Shutting down the server due to unhandled Rejection Error');
    server.close(() => {
        process.exit(1);
    })
})

process.on('uncaughtException',(err)=>{
    console.log(`Error: ${err.message}`);
    console.log('Shutting down the server due to uncaught Exception Error');
    server.close(() => {
        process.exit(1);
    })
})
// console.log(a);