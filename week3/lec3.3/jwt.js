// const jwt=require("jsonwebtoken")

// const value={
//   name:"harikarat",
//   accountNumber:"123123123"
// }
// const token=jwt.sign(value,"secretkey")
// console.log(token);
// const tokenverify=jwt.verify(token,"secret")

// try catch
// throwing and catching errors in JS

// function getLength(name){
//   return name.length;
// }
// const ans=getLength()
// console.log("hi there ")
// console.log(ans); // this will give a error

// when an exception is raised the process exists since the JS programm doesnot want to proceed anymore
//it will never reach to hi there
// try{
//   let a ;
//   console.log(a.length);
//   console.log("hi there from inside ")

// }catch(e){
// console.log("inside from the catch")
// }
// console.log("hi there")

// function getLength(name){
//   return name.length;
// }
// try{
//   const ans=getLength();
//   console.log(ans);
// }catch(e){
//   console.log("error is ",e);
// }
// console.log("hi there");
// in verify
// Jwt assignment

// 1 
// write a function that takes in a username and returns a JWT token with the username encoded should return null if the username is not valid email or if the password is less than 6 characters try using the zod library here
const jwtPass="1234564";
const zod =require("zod")
const jwt=require("jsonwebtoken")
const emailSchema=zod.string().email();
const passwordSchema=zod.string().min(6);

function generateJwt(username,password){
  const user=emailSchema.safeParse(username);
  const passwordd=passwordSchema.safeParse(password);
  if(passwordd.success&&user.success){
    const token=jwt.sign({username:username},"12314564");
  return token;

  }
  else{
    return null;
  }
}
// 2
// write a function takes a jwt as input and returns true if the jwt can be decoded (not verified ) return false otherwise
function isJwtValid(token){
  const decoded=jwt.decode(token);
  if(decoded){
    return true;
  }
  else{
    return false;
  }
}
// write a function that takes a jwt as input and returns true if the jwt can be verified returns  false otherwise

function jwtVerify(token){
  try{

    const ver=jwt.verify(token,jwtPass)
    if(ver){
      return true;
    }
    else{
      return false;
    }
  }
  catch(e){
    console.log("this is error");
  }
}