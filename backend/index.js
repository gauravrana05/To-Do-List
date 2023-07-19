let cors = require("cors");
require('dotenv').config()
require('express-async-errors')

const connectDb = require('./db/connect')

const express = require('express')
const app = express();


const errorHandlerMiddleware = require('./middleware/error-handler')
const notFound = require('./middleware/notFound')

const taskRouter = require('./routes/tasks')


app.get('/',(req,res)=>{
    res.send("<h1> Tasks API </h1> <a href ='/api/v1/tasks/'> Products Route</a>")
})

app.use(cors());
app.use(express.json());
app.use('/api/v1/tasks', taskRouter)


app.use(notFound);
app.use(errorHandlerMiddleware);


const start = async ()=>{
    try {
        await connectDb(process.env.MONGO_URI);
        app.listen(process.env.PORT, ()=>{
            console.log(`Server is listening on the port : ${process.env.PORT}...`);
        })
    } catch (error) {
        console.log(error);
        
    }
}
start();

