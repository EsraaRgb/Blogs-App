import mongoose, { connect } from "mongoose";

const connectDB = async ()=>{
    return await mongoose.connect('mongodb://localhost:27017/Assignment7').then(
        ()=>{
            console.log('DB connected');
        }
    )
    .catch(
        ()=>{
            console.log('Failed to connect DB');
        }
    )
}
export default connectDB