import mongoose from "mongoose";


const connectDB = (DATABASE_URL)=>{
    mongoose.connect(DATABASE_URL,{}).then(()=>{
        console.log("Database connect successfully")
}).catch((e)=>{
    console.log(`Error to connect database ${e}`)
})}

//module.exports= connectDB;

export default connectDB;