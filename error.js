// Error's
const express=require('express');
const app=express();
const ExpressError=require("./ErrorHandling");

const port=8080;

// Activity
  // Admin 
  app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"Only-AdmiCanAcess");
  })

 //----------------------------------------- 

app.use("/api",(req,res,next)=>{
      let{token}=req.query;
      if(token=="giveacess"){
            return next();
      }
 //     throw new Error("ACCESS DENIED...!");
   throw new ExpressError(401,"ACCESS DENIED...!");
  })

  app.get("/api",(req,res)=>{
    res.send("Here is Your Private-Iformation");
  })

//   app.get("/err",(req,res)=>{
//       abcd=abcd;
//   })

//   app.use((err,req,res,next)=>{
//     let{status,message}=err;
//     res.send(err);
//     res.status(status).send(message);
//   })

    app.use((err,req,res,next)=>{
     let{status=500,message="Some Error-Occured"}=err;
      res.status(status).send(message);
  })




  app.listen(port,(req,res)=>{
    console.log(`app listenig Port${port}`);
})
