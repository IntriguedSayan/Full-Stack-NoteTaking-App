const express=require("express")
const connection=require("./Config/db")
const {authController}=require("./Routes/auth.Route")
const {notesController}=require("./Routes/notes.Route")

const app=express()

const PORT=7600

app.use(express.json())
app.use("/auth",authController)
app.use("/notes",notesController)

app.get("/",(req,res)=>{
    res.send("Welcome to homePage")
})

app.listen(PORT,async()=>{
    try{
        await connection
        console.log(`Listening on port ${PORT}`)
    }catch(err){
        console.log("connection Failed")
        console.log(err)
    }
    
})
