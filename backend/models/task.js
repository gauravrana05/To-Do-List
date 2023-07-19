const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title:{
        type:  String,
        required: [true, "Task title must be provided"],
    },
    description:{
        type:String, 
        required: [true,"Task Description should be there"],
    },
    points:{
        type: Number,
        required: [true, "Story points cannot be zero"],
    },
    type: {
        type: String, 
        required: [true,"dafsj"]
    },
    priority: {
        type: String, 
        required: [true,"sadfa"]
    }
})

module.exports = mongoose.model('Task', taskSchema)