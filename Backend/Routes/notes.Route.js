const {Router, application}=require("express")
const {NoteModel}=require("../Models/note.model")
const jwt=require("jsonwebtoken")
const { authentication } = require("../Middlewares/authentication")
const { authorization }=require("../Middlewares/authorization")

const notesController=Router()


notesController.get("/",authentication,async(req,res)=>{

    const{userId,name}=req.body
    const notes=await NoteModel.find({userId:userId})
    if(!notes){
        return res.status(500).json({msg:"Something went wrong"})
    }
    return res.status(200).json({msg:"Data fetched",name:name,notes:notes})
    
})

notesController.get("/:id",authentication,authorization,async(req,res)=>{
    
    const id = req.params.id

    const singleNote=await NoteModel.findOne({_id:id})

    if(!singleNote){
        return res.status(500).json({msg:"Something went wrong."})
    }
    
    return res.status(200).json({msg:"Note fetched",note:singleNote})

})


notesController.post("/create",authentication,async(req,res)=>{

    const{userId,heading,description,tag}=req.body
    if(!userId|| !heading|| !description|| !tag){
            return res.status(400).json({msg:"Please fill all the input fields"})
    }
    const payload=req.body
    const newPayload={...payload,userId:userId}
    // console.log(newPayload)
    const notes=await new NoteModel(newPayload)
    try{
        notes.save()
        return res.status(201).json({msg:"Note Created"})
    }catch(err){
        console.log(err)
        return res.status(400).json({msg:"Something went wrong."})
    }
   

})

notesController.patch("/update/:id",authentication,authorization,async(req,res)=>{

    const id=req.params.id
    const payload=req.body
    await NoteModel.findByIdAndUpdate({_id:id},payload)
    try{
        return res.status(200).json({msg:"Note updated"})
    }catch(err){
        console.log(err)
        return res.status(400).json({msg:"Something went wrong"})
        
    }
    
    
})

notesController.delete("/:id",authentication,authorization,async(req,res)=>{
    
    const id=req.params.id
    await NoteModel.findByIdAndDelete({_id:id})
    try{
        return res.status(200).json({msg:"Note deleted"})
    }catch(err){
        console.log(err)
        return res.status(500).json({msg:"Something went wrong"})
    }
    

})

module.exports={
    notesController
}
