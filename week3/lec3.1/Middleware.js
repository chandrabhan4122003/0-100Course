// Middleware ,authentication global catches zod


// no middleware ugly way
const express=require("express")
const app=express();
const zod=require("zod");
// app.get("/health-checkup",function(req,res){
//   const kidneyId=req.query.kidneyId;
//   const username=req.headers.username;
//   const password=req.headers.password;

//   if(username!="chinku"&&password!="pass"){
//     res.status(403).json({
//       msg:"User doesnt exist"
//     });
//     return;
//   }
//   if(kidneyId!=1&&kidneyId!=2){
//     res.status(411).json({
//       msg:"wrong inputs",
//     });
//     return;
//   }
//   res.send("Your heart is healthy");
  
// })

// app.listen(3002,function(){
//   console.log("server is running on port 3002");
// })
// what if i tell you to introduce another route that does kidney replacement inputs need to be the same  
// Ugly solution create a new route repeat code

// better solution : middleware

// defining the middleware is just another function that takes req,res,next(it is helpful for moving the pointer to next callback functioin )

// function userMiddleware(req,res,next){
// const username=req.query.username;
// const password=req.query.password;
//   if(username!="chinku"&&password!="pass"){
//     res.status(403).json({
//       msg:"User doesnt exist"
//     });
//   }
//   else{
//     next();
//   }
// }
// function KidneyMiddleware(req,res,next){
// const kidneyId=req.query.kidneyId;
//   if(kidneyId!=1&&kidneyId!=2){
//     res.status(403).json({
//       msg:"Input incorrect"
//     });
//   }
//   else{
//     next();
//   }
// }
// app.get("/health-checkup",userMiddleware,KidneyMiddleware,function(req,res){
//   res.send("your heart is fine");
// });
// app.get("/heart-checkup",userMiddleware,function(req,res){
//   res.send("your hear is fine");
// });

// app.listen(3002,function(){
//   console.log("server is running on port 3002");
// })

// Last thing in middleware - app.use

// Find the average time your server is taking to handle requests

// let totalRequests=0;
// let totalTime=0;
// app.use(function(req,res,next){
//   const startTime=Date.now();
//   res.on('finish',function(){
//     const endTime=Date.now();
//     const timeTaken=endTime-startTime;
//     totalRequests++;
//     totalTime+=timeTaken;
//     console.log(`Time taken for request ${totalRequests} is ${timeTaken}ms`);
//     console.log(`current average time ${totalTime/totalRequests}ms`);
//   })
//   next();
// });

// app.get('/',function(req,res){
//   setTimeout(()=>{
//     res.send("Hello World");

//   },100);
// });

// app.get('/about',(req,res)=>{
//   setTimeout(()=>{
//     res.send("This is about page");
//   },200);
// });
// app.listen(3002,()=>{
// console.log(`server running on port 3002`)
// })

// Why we need input validation 
// app.use(express.json());
// app.post('/health-checkup',function(req,res){
//   const kidney=req.body.kidneys;
//   // if(!kidney){
//   //   res.json({
//   //     msg:"wrong inputs"
//   //   })
//   // }
//   const kidneyLength=kidney.length;
//   res.send("ur kindney length is  "+kidneyLength);

// });
// global catches
// help ou give the user a better error message
// Error-handling middleware this is s special type of middleware function in express that has four agument instead of three (`err,req,res,next`).Express recognizes it is an error handling middleware because of these four argument
// app.use(function(err,req,res,next){
//   res.status(500).json({
//     msg:"sorry somthing is up with our server"
//   })
// })
// app.listen(3002,function(){
//   console.log("listening ");
// });


// how can you do better input validation 
// ZOD schema validation 
const schema=zod.array(zod.number());

// { email:string =>email password:atleast 8 letters country:"IN","US"}

// const schema=zod.object({
//   email:zod.string(),
//   password:zod.string().length(8),
//   country:zod.literal("IN".or(z.literal("US")),
//   kidneys:z.array(z.number())
// )
// })
// app.use(express.json())
// app.post('/health-checkup',function(req,res){
//   const kidneys=req.body.kidneys;
//   const response=schema.safeParse(kidneys);
//   if(!response.success){
//     res.status(411).json({
//       msg:"wrong inputs"
//     })
//   }
//   else{
//     res.send({
//       response
//     })
//   }
// });
// app.listen(3002,function(){
//   console.log("server is listening on port 3002");
// })


// Authentication 
// as you can tell by now ,anyone can send requests to your backend they can just go to postman and send a request how do you ensure that this user has access to a certain resource

// dumb way ask user to send username and password in all requests as headers

// slighlty better way
// give the user back a token on signup/signin
// ask the user to send back the token in all future requests 
// when the user logs out ask the user to forget the token (or revoke it from the backend)