// const express=require('express');
// function calculateSum(n){
//   let ans=0;
//   for(let i=0;i<=n;i++){
//     ans+=i;
//   }
//   return ans;
// }
// const app=express();
// app.get("/",function(req,res){
//   const n=req.query.n;
//   const ans=calculateSum(n);
//   res.send(ans);
// })

// app.listen(3002,function(){
//   console.log("server is running on port 3002");
// });

// Request methods
// GET - Retrieve data from the server
// POST - Send data to the server to create a new resource 
// PUT - Update an existing resource on the server
// DELETE - Delete a resource from the server

// you need to create 4 routes (4 things that the hospital can do) 
// Get - user can check how many kidneys they have and their health 
// post - user can add a new kidney
// put - user can replace a kidney make it healthy
// delete user can remove a kidney


const express=require('express')
const app=express();
var users=[{
  name:'John',
  kidneys:[{
    healthy:false
  }]
}]
app.use(express.json());
app.get("/",function(req,res){
    const johnKidneys=users[0].kidneys;
    const numberOfKidneys=johnKidneys.length;
    let numberOfHealthyKidneys=0;
    for(let i=0;i<johnKidneys.length;i++){
      if(johnKidneys[i].healthy){
        numberOfHealthyKidneys++;
    }
    const numberOfUnhealthyKidneys=numberOfKidneys-numberOfHealthyKidneys;
    res.json{(
      numberOfKidneys,
      numberOfHealthyKidneys,
      numberOfUnhealthyKidneys
    )}
}})
app.post("/",function(req,res){
    const isHealthy=req.body.isHealthy;
    users[0].kidneys.push({
      healthy:isHealthy
    })
    res.json({
      message:"Done"
    })
})
app.put("/",function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
      users[0].kidneys[i].healthy=true;
    }
    res.json({
      message:"done"
    })
})
app.delete("/",function(req,res){
    const newKidneys=[];
    for(let i=0;i<users[0].kidneys.length;i++){
      if(users[0].kidneys[i].healthy){
        newKidneys.push({
          healthy:true
        });
    }
    users[0].kidneys=newKidneys;
    res.json({msg:"done"})
}})
app.listen(3000)