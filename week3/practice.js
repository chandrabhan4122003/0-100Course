// 1  Problem Statement:
// Create a function validateInput that:

// Accepts an array of elements.

// Validates that all elements must be numbers and the array should contain at least one element.

// const zod=require("zod")

// function validateInput(arr){
//   const schema=zod.array(zod.number()).min(1);
//   if(schema.safeParse(arr).success){
//     return true;
//   }
//   else{
//     return false;
//   }
// }
// console.log(validateInput([1,2,3]));
// safeParse return object with success property which is true if the input is valid and false otherwise.

// function validateInput(object){
//   const email=zod.string().email();
//   const password=zod.string().min(8);
//   const schema=zod.object({email:email,password:password}).safeParse(object);
//   if(schema.success){
//     return true;
//   }
//   else{
//     return false;
//   }
// }
// console.log(validateInput({
//   email:"chinku@gmail.com",
//   password:"123465487"
// }));


// Problem 3: ✅ JWT Token Generation and Authentication
// Problem:
// Build a POST route /signin using Express that:

// Accepts username and password in the request body.

// Validates the user from an in-memory array.

// If valid, generate and return a JWT token.

// If invalid, return a 403 status with the message:
// "Username or password is incorrect"

// const expres=require("express")
// const app=express();

// const jwt=require("jsonwebtoken")
// const jwtPass="123456"
// const users=[{
//   "username":"chinku",
//   "password":"1234564"
// },
// {
//   "username":"raja",
//   "password":"123321"
// },{
//   "username":"noob",
//   "password":"321123"
// },
// ];
// function validate(username,password){
//     for(user of users){
//       if(user.username==username&&user.password==password){
//         return true;
//       }
//     }
//     return false;
// }
// app.use(express.json());
// app.post("/signin",function(req,res){
//   const username=req.body.username;
//   const password=req.body.password;
//   if(!validate(username,password)){
//     return res.status(403).json({
//       "message":"Username or password is incorrect"
//     })
    
//   }
//   const token=jwt.sign({username:username},jwtPass);
//   res.json({
//     "token":token,
//   })
// })
// app.listen(3002,function(){
//   console.log("server is running on port 3002");
// })

// Problem 4: ✅ JWT Token Verification and Protected Route
// Problem Statement:
// Build a GET route /users using Express that:

// Reads the JWT token from the Authorization header in the request.

// Verifies the token using the jsonwebtoken library.

// If the token is valid, return the list of users (from the in-memory array).

// If the token is missing or invalid, return a 403 Forbidden response with the message:
// "Invalid token"

// const express=require("express")
// const app=express();
// const jwt=require("jsonwebtoken")
// const jwtPass="1234565"
// const users=[{
//   "username":"chinku",
//   "password":"1234564"
// },
// {
//   "username":"raja",
//   "password":"123321"
// },{
//   "username":"noob",
//   "password":"321123"
// },
// ];
// app.use(express.json())
// app.get("/users",function(req,res){
//   const token=req.headers.authorization;
//   const actualToken = token.split(' ')[1];
//   try{
//       const decoded=jwt.verify(actualToken,jwtPass);
//       const username=decoded.username;
//       res.json({
//         mes:"welcome  "+username,
//       })
//   }
//   catch(err){
//     return res.status(403).json({
//       "msg":"invalid "
//     })
//   }
// })

// app.listen(3002,function(){
//   console.log("server is running on port 3002")
// });


// starting doing from problem statement 7
// 📄 Problem 7: ✅ Password Hashing with bcrypt (Advanced)
// Problem Statement:
// Update the signup and signin routes to:

// Hash the password using bcrypt when saving to MongoDB.

// Compare hashed passwords during signin.

// Ensure plaintext passwords are never stored.

// 📄 Problem 8: ✅ JWT Token Expiry and Refresh (Advanced)
// Problem Statement:
// Set token expiry to 1 minute in the JWT sign function.

// Create a new route /refresh-token that issues a new token if the old token is valid but expired.

// 📄 Problem 9: ✅ Middleware for Token Validation
// Problem Statement:
// Build a reusable middleware that:

// Extracts the token from the Authorization header.

// Verifies the token.

// Attaches the decoded user info to req.user for protected routes.

// Returns a 401 Unauthorized error if token is invalid.

// 📄 Problem 10: ✅ Query Parameter Handling in Express
// Problem Statement:
// Create a GET route /query-example that:

// Accepts query parameters:

// http
// Copy code
// http://localhost:3007/query-example?name=Chinku&age=21
// Responds with:

// json
// Copy code
// {
//   "message": "Hello Chinku, you are 21 years old"
// } these are the questions left give me one by one