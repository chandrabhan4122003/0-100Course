const {Admin}=require("../db/index")

function adminMiddleware(req,res,next){
  const username=req.headers.username?.trim();
  const password=req.headers.password?.trim();

  if (!username || !password) {
    return res.status(400).json({
      msg: "Missing username or password in headers"
    });
  }
  Admin.findOne({
    username:username,
    password:password
  }).then(function(value){
    if(value){
      next();
    }
    else{
      res.status(403).json({
        msg:"Admin D exist"
      })
    }
  })
}
module.exports=adminMiddleware;