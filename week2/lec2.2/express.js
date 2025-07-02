// What is Express
// Express is a Node.js web framework that allows developers to build web applications and APIs quickly and efficiently.'

const express=require("express");
const bodyParser=require("body-parser")
const app=express();
const port=process.env.PORT||3007;
//middleware
app.use(bodyParser.json());

app.get("/route-handler",function(req,res){
  //headers body query parameters
  // do machine learning model
  res.json({
    name:"chinku",
    age:21
  })
})

app.post('/backend-api/conversation',(req,res)=>{
  const message=req.body.message;
  console.log(message)
  res.json({
    output:"2+2=4"
  })
})

app.post('/',function(req,res){
  console.log(req.body);
  res.send('<b>hi there </b>')
})

app.listen(port,function(){

  console.log(`Example app listening to port ${port}`)
})

// we can use body-parser
// The body-parser module enables
// us to parse incoming request
// bodies in a middleware.
// Express.js server needs to know
// what type of data you're sending
// over the network, so it knows how
// to parse it.