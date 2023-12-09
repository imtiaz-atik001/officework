import userModel from "../models/user.js";
import bcrypt, { hash } from "bcrypt"
import jwt from "jsonwebtoken"

class userController{
    static userRegistration= async(req,res)=>{
        const {name,email,password,password_confirmation,tc}=req.body;
        const user= await userModel.findOne({email:email})
        if(user){
            res.send({"Status":"failed","Message":"Email Already exist"})
        }else{
            if(name && email && password && password_confirmation && tc){
                if(password==password_confirmation){
                    try {
                        const salt = await bcrypt.genSalt(10);
                        const hashPassword =await bcrypt.hash(password,salt);//Password hashing with salt iteration of 10
                        const new_user_doc=new userModel({
                        name:name,
                        email:email,
                        password:hashPassword,
                        tc:tc
                    })
                        await new_user_doc.save();
                        res.send({"Status":"Successful","Message":"Successfully registered"})
                    } catch (error) {
                        res.send({"Status":"Failed","Message":"Unable to register"})
                    }

                }else{
                    res.send({"Status":"Error","Message":"Password not matched in the two field"})
                }
            }
            else{
                res.send({"Status":"Failed","Message":"All field are required"})
            }
        }
    }
}

export default userController;