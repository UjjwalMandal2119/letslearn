const express= require("express");

const app = express();
 app.get("/health-checkup", function(req, res) {
   const username= req.headers.username;
   const password= req.headers.password;
   const KidneyId= req.query.lidneyId;

   if(username!="Ujjwal" || password!="pass"){
     res.status(400).json({"msg": "Somethings wrong with your input"})
     return;
   }
   if(kidneyId!=1 && kidneyId!=2){
     res.status(400).json({"msg": "Somethings up with your inputs"})
     return;
   }
   res.json({
     msg:"Your kidney is fine!"
   })
});
app.listen(3000);