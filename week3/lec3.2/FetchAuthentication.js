// FETCH Authentication Databases
// The fethc way

// Until now we have sent request in 2 ways 
// postman browser url bar

// third way
// Lets say i ask you create an html page where you can ee the names of 10 people 
// you need to make sure you get these data from an api call


// Authentication
// let people sign up to your website only allow signed in users to see people (Create a dummy people list)

// lets understand some cryptography jargon

//  hashing : converting a string into a fixed length string (like a password) one way
// Given the output no one can find out the input 
// changing the input  a lit bit changges the output by a lot  

// encryption : converting a string into a string that can be decrypted (like a secret message)(two way)
// a string a encrypted using a password 
// String can be decrypted using the same password 

// json web tokens : a way to store user data in a token that can be verified by the server (like a
// ticket to a concert)
// it will be working on json format 
// token  
// its neither of encryption or hashing (its technically a digital signature)
// anyone can see the original output given the singature 
// signature can be verified only using the password 

// local storage : a way to store data on the client side (like a cookie)
// a place in your browser where you can store some data usually things that are stored include 
// Authentication tokens 
// user language preference
// user theme preference

// lets start by creating our assignment for today a website which has 2 endpoints
//  post /signin
// body - { username:string,password:string}
// returns a json web token with username encrypted

// Get /users
// Headers - Authorization header
// returns an array of all users if user is signed in (token is correct ) returns 403 status code if not 

//
// const express=require("express")
// const jwt=require("jsonwebtoken")
// const jwtPassword="123456";
// const app=express();
// app.use(express.json())
// const ALL_USERS=[
//   {username:"chinku@gmail.com",
//     password:"123",
//     name:"Chinku"
//   },
//   {
//     username:"raman@gmail.com",
//     password:"123321",
//     name:"Raman"
//   },
//   {
//     username:"priya@gmail.com",
//     password:"123321",
//     name:"Priya kumari"
//   },
// ];
// function userExists(username,password){
//   // write logic to return true or false if this user exists in ALL_USERS array
//   for(let user of ALL_USERS){
//     if(user.username==username&&user.password==password){
//       return true;
//     }
//   }
//   return false;
// }
// app.post("/signin",function(req,res){
//   const username=req.body.username;
//   const password=req.body.password;
//   if(!userExists(username,password)){
//       return res.status(403).json({
//         msg:"user doesnot exist in our memory db"
//       });
//   }
//   var token=jwt.sign({username:username},jwtPassword);
//   return res.json({
//     token,
//   });
// });
// app.get("/users",function(req,res){
//     const token =req.headers.authorization;
//     try{
//         const decoded=jwt.verify(token,jwtPassword);
//         const username=decoded.username;
//         res.json({
//           msg:"Welcome "+username
//         })
//     }
//     catch(err){
//       return res.status(403).json({
//         msg:"invalid token "
//       });
//     }
// });
// app.listen(3002,function(){
//   console.log("server is listening on port 3002")
// })

// Problem 5: ✅ MongoDB User Signup
// Problem Statement:
// Build a POST route /signup using Express and MongoDB that:

// Accepts username, password, and name from the request body.

// Checks if the user already exists in the MongoDB collection (duplicate prevention).

// If the user does not exist, save the user to the database.

// Return a success message: "User created successfully"

// If the user already exists, return: "Username already exists"

//
// const express=require("express")
// const app=express()
// const mongoose=require("mongoose");

// app.use(express.json())

// mongoose.connect("your string ").then(()=>console.log("connected to mongodb")).catch((err)=>console.log("error ",err));

// const User=mongoose.model("User",{
//   name:String,
//   username:String,
//   password:String
// });
// app.post("/signup",async function(req,res){
//   const {name,username,password}=req.body;
//   const existingUser=await User.findOne({username:username});
//   if(existingUser){
//     return res.status(400).json({
//       msg:"Username already exist"
//     });
//   }
//   const user=new User({name,username,password});
//   await user.save();
//   res.status(201).json({
//     msg:"User added successfully"
//   })
// })

// app.listen(3002,function(){
//   console.log("server is listening on port 3002")
// })

