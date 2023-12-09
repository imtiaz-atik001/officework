import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./config/connectdb.js"
import router from "./routes/userRoutes.js";


const app=express();
const port= process.env.PORT;
const DATABASE_URL= process.env.DATABASE_URL;

//console.log(DATABASE_URL);

app.use('/api/user/register',(rec,res)=>{
    res.send("Check done in register")
})

//connect database
connectDB(DATABASE_URL);

//JSON
app.use(express.json())

//load the routes
app.use("/api/user",router)


app.use(cors())
app.listen(port,()=>{
    console.log(`Sevrer is running in the port of ${port}`);
})