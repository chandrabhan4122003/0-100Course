// function sum(a,b){
//   return a+b;
// }
// console.log(sum(1,2));
// callback function
// passing a function as an argument to another function
// function sum(num1,num2,fnToCall){
//   let result = num1 + num2;
//   fnToCall(result);
// }
// function printResult(result){
//   console.log(result);
// }

function greet(){
  console.log("Hello, World!");
}
setTimeout(greet,5*1000)
setInterval(greet,1*1000);