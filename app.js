const express=require('express');
const app=express();

const port=8080;

// 1st MiddleWare

//  app.use(()=>{
//     console.log("This is My-First MiddleWare");
//  })

//  app.use((req,res)=>{
//     console.log("This is My-First MiddleWare");
//     res.send("Hi, I am MiddleWare");
//  })

//  app.use((req,res,next)=>{
//     console.log("This is My-First MiddleWare");
//     next();
//  })

//-----------------------------------------------------------------------

  // Creating Utility MiddleWare
//  Ex:-  Using Logger (Logger Means it used to print the UseFull inforamtion in Console like route Method,path,time and hostname)

// app.use((req,res,next)=>{
//     req.time=new Date(Date.now()).toString();
//     console.log(req.path,req.method,req.hostname,req.time);
//     next();
// })
 
// app.get("/",(req,res)=>{
//     res.send("Hi , I am Root");
// })

// app.get("/random",(req,res)=>{
//     res.send("This is Random-Route");
// })

//-----------------------------------------------------------------

// Using MiddleWare for Specific Path

// app.use("/api",(req,res,next)=>{
//     console.log("This api Used for Specific-Route");
//     next();
// })

// app.get("/api/random",(req,res)=>{
//     res.send("This is Specific-Route API");
// })

// app.get("/random",(req,res)=>{
//     res.send("This is Random-Route");
// })

// -----------------------------------------------------
   // API Token as QueryString

//   app.use("/api", (req, res, next) => {
//     let { body } = req.query;
//     console.log(body);
//     next();
// });

// app.get("/api", (req, res) => {
//     res.send("Middleware executed successfully");
// });

  // Acess Token

//   app.use("/api",(req,res,next)=>{
//       let{token}=req.query;
//       if(token=="giveacess"){
//              next();
//       }
//   })

//   app.get("/api",(req,res)=>{
//     res.send("Here is Your Private-Iformation");
//   })


  // Passing Multiple-MiddleWare  (Means Passing MiddleWare's as a Function)

  const checkToken=("/api",(req,res,next)=>{
      let{token}=req.query;
      if(token=="giveacess"){
             next();
      }
  })

  app.get("/api",checkToken,(req,res)=>{
    res.send("Here is Your Private-Iformation");
  })
 

app.listen(port,(req,res)=>{
    console.log(`app listenig Port${port}`);
})


