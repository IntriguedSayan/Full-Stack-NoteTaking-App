const {Router}=require("express")
const {NoteModel}=require("../Models/note.model")
const jwt=require("jsonwebtoken")
const { authentication } = require("../Middlewares/authentication")
const { authorization }=require("../Middlewares/authorization")

const notesController=Router()


notesController.get("/",authentication,async(req,res)=>{

    const{userId}=req.body
    const notes=await NoteModel.find({userId:userId})
    return res.json({msg:"Data fetched",notes:notes})

})

notesController.post("/create",authentication,async(req,res)=>{

    const{userId}=req.body
    const payload=req.body
    const newPayload={...payload,userId:userId}
    const notes=await new NoteModel(newPayload)
    notes.save()
    return res.status(201).json({msg:"Note Created"})

})

notesController.patch("/update/:id",authentication,authorization,async(req,res)=>{

    const id=req.params.id
    const payload=req.body
    await NoteModel.findByIdAndUpdate(id,payload)
    return res.status(200).json({msg:"Note updated"})
    
})

notesController.delete("/:id",authentication,authorization,async(req,res)=>{
    
    const id=req.params.id
    await NoteModel.findByIdAndDelete(id)
    return res.status(200).json({msg:"Note deleted"})

})

module.exports={
    notesController
}
