const express= require("express");

const app= express();
 let numberOfRequests=0;
  function calculateRequests(req, res, next){
    numberOfRequests++;
    console.log(numberOfRequests);
    next();
  }

  app.use(calculateRequests)

  app.post("/health-checkup", function(req, res){
    res.json({
        msg: "hi there"
    })
  });
  app.get("/health-checkup2", function(req, res){

  });

  app.listen(3000);