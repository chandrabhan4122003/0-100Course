// if this is an array of  with anumber tleast 1 input return true else return false
const zod=require("zod")
function validateInput(arr){
  const schema=zod.array(zod.number());
  const response=schema.safeParse(arr);
  console.log(response)
}
validateInput(["1",2,300]);