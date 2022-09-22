const {Router}=require("express")
const {NoteModel}=require("../Models/note.model")
const jwt=require("jsonwebtoken")
const { authentication } = require("../Middlewares/authentication")


const notesController=Router()


notesController.get("/",authentication,async(req,res)=>{

    const{userId}=req.body
    const notes=await NoteModel.find({userId:userId})
    return res.send({msg:"Data fetched",notes:notes})
})



module.exports={
    notesController
}
