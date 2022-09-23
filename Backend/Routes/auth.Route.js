const {Router}=require("express")
const {UserModel}=require("../Models/user.model")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
require("dotenv").config()

const authController=Router()

authController.get("/",(req,res)=>{
    res.json({msg:"Continue towards authentication"})
})

authController.post("/signup",async(req,res)=>{
   
    const{name,email,password}=req.body
    const checkEmail=await UserModel.findOne({email:email})
    if(!checkEmail){
        let hashedPassword=bcrypt.hashSync(password,6)
        if(!hashedPassword){
            return res.status(500).json({msg:"Something went wrong. Please try again."})
        }else{
            const user=new UserModel({
                name:name,
                email:email,
                password:hashedPassword 
            })
    
            await user.save()
            return res.status(201).json({msg:"Signup Successful"})
        }
    }else{
        return res.json({msg:"Please choose another email"})
    }
   

})

authController.post("/login",async(req,res)=>{

    const{email,password}=req.body
    const user=await UserModel.findOne({email:email})

    const hashedPassword=user.password
    bcrypt.compare(password,hashedPassword,(err,result)=>{
        if(result){
            const token=jwt.sign({userId:user._id},`${process.env.SECRET_KEY}`)
            return res.status(200).json({message:"login succesful",token:token})
        }else{
            return res.json({msg:"Login failed. Please try again"})
        }
    })


})



module.exports={
    authController
}