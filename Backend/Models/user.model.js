const mongoose=require("mongoose")

const userSchema= new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
},{
    versionKey:false,
    timestamps:true
})

const UserModel=mongoose.model("fsuser",userSchema)

module.exports={
    UserModel
}