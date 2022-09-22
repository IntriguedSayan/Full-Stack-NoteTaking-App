const {Router}=require("express")
const {NoteModel}=require("../Models/note.model")
const jwt=require("jsonwebtoken")
const { authentication } = require("../Middlewares/authentication")


const notesController=Router()


notesController.get("/",authentication,(req,res)=>{

    

    return res.send("Notes")
})



module.exports={
    notesController
}
