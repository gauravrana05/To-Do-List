require('dotenv').config()

const connectDB = require('./db/connect')
const Task = require('./models/task')

const jsonTasks = require('./tasklist.json')

const jsonTask = {
    "title": "Clean office spac",
    "description": "I want to clean my office table, mop the floor, and vacuum the chair. ",
    "points": 3,
    "type": "notStarted",
    "priority": "high"
}

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI);  
        await Task.deleteMany()
        await Task.create(jsonTasks)  
        console.log('Success!!!'); 
        process.exit(0)
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

const keepOne = async () =>{
    try {
        await connectDB(process.env.MONGO_URI);  
        await Task.create(jsonTask)  
        console.log('Success!!!'); 
        process.exit(0)
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

// start()
keepOne();