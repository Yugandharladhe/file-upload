const express=require("express")
const app=express()
const multer=require("multer")
const PORT=process.env.PORT || 3000

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        return cb(null,"./uploads");
    },
    filename:function(req,file,cb){
        return cb(null,`${Date.now()}-${file.originalname}`)
    }
})

const upload=multer({storage:storage})

app.post("/upload",upload.single("Pimage"),(req,res)=>{
    console.log(req.body)
    console.log(req.file)
    return res.send(req.file)
})

app.get("/",(req,res)=>{
    console.log("welcome to api")
    res.send("welcome to api")

})

app.listen(PORT,()=>{
    console.log("app is listening")
})