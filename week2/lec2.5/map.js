//map filter arrow funs
function sum(a,b){
  return a+b;
}
const sum=(a,b)=>{
  return a+b;
}

// Map Filter
// give an array give me new array in which every value is multiplied by 2 
//[1,2,3,4,5]
// [2,4,6,8,10]
const arr=[1,2,3,4,5];
// map (arr,function)
const arr2=arr.map(function(x){
  return x*2;
})
// map (arr,arrow)
const arr3=arr.map(x=>
  x*2
  )

// filtering 
// what if i tell u ,given a ninput array give me back all the ven values from it 
const ans=arr.filter(function(x){
  if(x%2==0) return true;
  else return false;
})