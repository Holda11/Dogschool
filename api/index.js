const express = require("express");
const app = express();
const dotenv = require('dotenv').config()
const {errorHandler} = require('./Middleware/errorMiddleware')
const connectDB = require('./Config/db')
const cors = require("cors");

const port = process.env.PORT || 5000
connectDB()

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cors());
app.use('/api/News', require('./Routes/NewsRoute'))
app.use('/api/Dog', require('./Routes/DogRoute'))
app.use('/api/User', require('./Routes/UserRoute'))
app.use(errorHandler)



app.listen(port, ()=>{
    console.log(`Aplikace jede na ${port}`);
});