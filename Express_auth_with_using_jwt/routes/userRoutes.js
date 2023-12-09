import express from "express";
const router=express.Router();
import userController from "../controllers/usercontroller.js";

//2 routes to make sure the security
//public route
router.post('/register',userController.userRegistration);

export default router;



//private or protected root
