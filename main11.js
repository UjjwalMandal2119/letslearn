const express=require("express");
 const app=express();
 app.get("/" ,function(req,res){
    res.send("HI Ujjwal");
 }
);
 app.listen(3000);