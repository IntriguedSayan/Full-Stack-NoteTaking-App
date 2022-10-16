const {Router}=require("express")
const {UserModel}=require("../Models/user.model")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
require("dotenv").config()
const {authentication}=require("../Middlewares/authentication")
const {authorization}=require("../Middlewares/authorization")

const authController=Router()

authController.get("/",(req,res)=>{
    res.json({msg:"Continue towards authentication"})
})

authController.get("/user/:Id",authentication,async(req,res)=>{

    const id=req.params.Id
    const user=await UserModel.findOne({_id: id })

    if(!user){
        return res.status(500).json({msg:"Something went wrong,user not found. Please try again later."})
    }
    return res.status(200).json({msg:"Profile fetched Succecsfully",user:user})

})

authController.patch("/update/:id",authentication,async(req,res)=>{
        
    const id=req.params.id
    const payload=req.body

    await UserModel.findByIdAndUpdate({_id:id},payload)

    try{
        res.status(200).json({msg:"Profile updated successfully"})
    }catch(err){
        console.log(err)
        res.status(500).json({msg:"Something went wrong",err:err})
    }


})

authController.post("/signup",async(req,res)=>{
   
    const{name,email,password}=req.body
    const checkEmail=await UserModel.findOne({email:email})
    if(!checkEmail){
        let hashedPassword=bcrypt.hashSync(password,6)
        if(!hashedPassword){
            return res.status(500).json({msg:"Something went wrong. Please try again later."})
        }else{
            const user=new UserModel({
                name,
                email,
                password:hashedPassword 
            })
            try{
                await user.save()
                return res.status(201).json({msg:"Signup Successful"})
            }catch(err){
                console.log(err)
                res.status(500).json({msg:"Something went wrong. Please try again later"})
            }
        }
    }else{
        return res.status(400).json({msg:"Please choose another email"})
    }
   

})

authController.post("/login",async(req,res)=>{

    const{email,password}=req.body
    const user=await UserModel.findOne({email})
    if(!user){
        return res.status(400).json({msg:"Something went wrong. Please give correct credentials and try again later."})
    }
    const hashedPassword=user.password
    bcrypt.compare(password,hashedPassword,(err,result)=>{
        if(err){
            return res.status(500).json({msg:"Something went wrong. Please try again later."})
        }
        if(result){
            const token=jwt.sign({userId:user._id,name:user.name},process.env.SECRET_KEY)
            return res.status(200).json({message:"login succesful",token:token})
        }else{
            return res.status(400).json({msg:"Login failed. Invalid credentials, please signup if you haven't."})
        }
    })


})



module.exports={
    authController
}