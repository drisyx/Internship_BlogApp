const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.json({
        message:"hello world"
});
});
app.listen(8000,()=>{
    console.log("server is runnung on port 8000");
});