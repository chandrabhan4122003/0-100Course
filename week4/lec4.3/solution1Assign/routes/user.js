const {Router}=require("express");
const router=Router();

const {User,Course}=require("../db/index")
const userMiddleware=require("../middleware/user");
router.post('/signup',(req,res)=>{
    const {username,password}=req.body;
    User.create({
      username,
      password:password
    }).then(function(){
      res.json({
        msg:"User created Successfully"
      })
    })
})
router.get('/courses',async function(req,res){
     const response= await Course.find({})
      res.json({
        courses:response
      })
})
router.post('/courses/:courseId',userMiddleware,function(req,res){
  const courseId=req.params.courseId;
  const username=req.headers.username;
  User.updateOne({
    username:username
  },
  { $push: { purchasedCourses: courseId } }

);
res.json({
  msg:"Course added to your purchased courses"
})

})
router.get("/purchasedCourses",userMiddleware,async (req,res)=>{
    const user=await User.findOne({
      username:req.headers.username
    })
    // console.log(user.purchasedCourses)
    const courses=await Course.find({
      _id:{
        "$in":user.purchasedCourses
      }
    })

    res.json({
      courses:courses
    })
})
module.exports=router;