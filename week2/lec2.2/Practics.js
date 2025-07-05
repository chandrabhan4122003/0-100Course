// 1>Create a GET Route:

// Create a simple Express server with a GET route /hello that returns a JSON response: { "message": "Hello, World!" }.

const express=require("express")
const bodyParser=require('body-parser')
const app=express()
const port=3007
// app.get("/hello",(req,res)=>{
//   res.json({
//     message:"Hello, world"});
// })

// app.listen(port,function(){
//   console.log(`server is running on port ${port}`);
// })

// 2..// Setup a POST Route:

// Build a POST route /greet that accepts a JSON body { "name": "John" } and responds with:
// { "greeting": "Hello, John" }

// app.use(bodyParser.json());

// app.post('/greet',(req,res)=>{
//   const name=req.body.name;
//   res.json({
//     greeting:`Hello ${name}`
//   });
// });
// app.listen(port,function(){
//   console.log(`server is running on port ${port}`);
// })

//3// Send an HTML Response:

// Create a POST route /html-response that returns an HTML string:
// <h1>Welcome to Express Server</h1>

// app.post('/html-response',function(req,res){
//   res.send('<h1> Welcome to Express Server</h1>');
// })
// app.listen(port,function(){
//   console.log(`server is drunning on port ${port}`);
// })

//4//
// Create a POST route /log-body that:
// Accepts any JSON request body.
// Prints the entire request body to the console.
// Sends the response:
// "Body logged successfully"
// app.use(bodyParser.json());
// app.post('/log-body',function(req,res){
//   const body=req.body;
//   console.log(body);
//   res.send("Body logged Successfully");
// })
// app.listen(port,function(){
//   console.log(`server is running on port ${port}`);
// })

// 5 // 📄 Problem:
// Create a GET route /query-example that:
// Accepts query parameters like:
// http://localhost:3007/query-example?name=Chinku&age=21
// Reads the name and age from the query parameters.
// Responds with:
// json
// {
//   "message": "Hello Chinku, you are 21 years old"
// }

app.get('/query-example',function(req,res){
    const name=req.query.name;
    const age=req.query.age;
    res.json({
      message:`Hello ${name},you are ${age} years old `
    });
});
app.listen(port,function(){
  console.log(`server is running on port ${port}`);
});