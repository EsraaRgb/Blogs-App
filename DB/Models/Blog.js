import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    // price:{
    //     type:Number,
    //     required:true
    // },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    }
})

const blogModel = mongoose.model('Blog',blogSchema)

export default blogModel