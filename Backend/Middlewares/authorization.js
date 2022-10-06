const {NoteModel}=require("../Models/note.model")

const authorization=async(req,res,next)=>{
    
    const userId = req.body.userId
    const checkedData=await NoteModel.findOne({_id:req.params.id})
    if(checkedData.userId===userId){
        next()
    }
    else{
        return res.send("You are not authorized to perform this operation.")
    }

}

module.exports={
    authorization
}