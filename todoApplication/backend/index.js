// 1 write basic express boilerplate code,
// with express.json() middleware

// 2 //body {
    // title:string;
    //description:string:
// }

const express=require("express");
const { createTodo } = require("./type");
const {todo} =require("./db")
const app=express();
const cors=require("cors");
app.use(cors({
  origin:"http://localhost:5173",
}));
app.use(express.json());

const port=3000;
app.post("/todo",async function(req,res){
    const createPayload=req.body;
    const parsedPayload=createTodo.safeParse(createPayload)
    if(!parsedPayload.success){
      res.status(411).json({
        msg:"you sent the wrong inputs"
      });
      return;
    }
    await todo.create({
      title:createPayload.title,
      description:createPayload.description,
      completed:false
    })
    res.json({msg:"Todo created"})
})
app.get("/todos",async function(req,res){
    const todos=await todo.find({});
      // title:"go to gym"
    res.json({
      todos
    })
    // console.log(todos) //promise
})
app.put("/completed",async function(req,res){
    const updatePayload=req.body;
    const parsedPayload=updatePayload.safeparse(updatePayload)
    if(!parsedPayload.success){
      res.status(411).json({
        msg:"you sent the wrong inputs"
      })

      return;
    }
    await todo.update({
      _id:req.body.id
    },{
      completed:true
    })
    res.json({
      msg:"Todo marked as completed"
    })
    
})
app.listen(port,function(){
  console.log(`server is listening on port ${port}`);
})
