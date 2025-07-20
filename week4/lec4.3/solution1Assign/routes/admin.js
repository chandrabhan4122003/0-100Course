const {Router} =require("express")
const adminMiddleware=require("../middleware/admin");

const router=Router();
const {Admin,Course}=require("../db/index")
router.post('/signup',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    // check if a user with this username already exists
  Admin.create({
    username:username,
    password:password
  })
  .then(function(){
    res.json({message: "Admin created successfully"});
  })
  
 

})
router.post('/courses',adminMiddleware,(req,res)=>{
  
  const  title=req.body.title;
  const description=req.body.description;
  const price=req.body.price;
  const image=req.body.image;
  // zod validation u can do 
  Course.create({
    title:title,
    description:description,
    price:price,
    image:image
  })
  .then(function(createCourse){
    res.json({
      msg:"Course Created Successfully",
      courseId:createCourse._id
    })
  })
    

})
router.get('/courses',adminMiddleware,async (req,res)=>{
      // Course.find({}).then(function(response){
      //   res.json({
      //     courses:response
      //   })
      // })

      const response= await Course.find({})
      res.json({
        courses:response
      })

})
module.exports=router;
