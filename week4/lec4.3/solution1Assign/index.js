const express=require("express")
const bodyParser=require('body-parser')
const app=express()
const adminRouter=require('./routes/admin')
const userRouter=require('./routes/user')

// middleware for parsing request bodies
app.use(bodyParser.json())
app.use('/admin',adminRouter)
app.use('/user',userRouter)
const port=3002;
app.listen(port,()=>{
  console.log(`server is running on port ${port}`)
});