// synchronous
// together one after the other,sequential Only one thing is happening at a time 

// asynchronous
// happens in parts multiple thingsare context switching with each other

// function findSumTill(n){
//   let ans=0;
//   for(let i=0;i<n;i++){
//     ans+=i;
//   }
//   return ans;
// }
// function findSumTill100(){
//   console.log(findSumTill(100));
// }

// busy waiting
// function syncSleep(){
//   let a=1;
//   for(let i=0;i<10000000000;i++){
// a++;
//   }
// }
// // syncSleep();
// setTimeout(findSumTill100,1000);
// console.log("hello world"); //calling an asynchronous function 

// what are common async functions ?
// setTimeout
// fs.readFile-to read a file from your FileSystem
// fetch-to fetch some data from an  API endpoint

const fs=require('fs');
// fs.readFile("d:\assignments-master\week1\lec1.5\a.txt","utf-8",function(err,data){
//   console.log(data);
// });
// console.log('this is a message ');

// takes very long time to execute 
// let a=0;
// for(let i=0;i<10000000000;i++){
//   a++;
// }
// console.log("this is a message");
// output 
// this is message 
// this is a messae 
// hi from a a.txt

// Promises
// it is just a class taht makes callbacks and async functions slighlty more readable
// when u create it ,you need to pass in a function as teh first argument which has resolve as the first argument and reject as the second argument 
// a promise is a value that may not be available yet but will be available in the future

// promises are syntantical sugar that the callback hell is a nightmare to read and write make it easier to read and write

// 
// function kiratsReadFile(){
//   console.log("inside kirat")
//   return new Promise(function(resolve){
//     console.log("inside promise")
//     fs.readFile("a.txt","utf-8",function(err,data){
//       console.log("before resolve")
//       resolve(data);
//     })
//   })
// }

// function onDone(data){
//   console.log(data);
// }
// kiratsReadFile().then(onDone);

// Promise Class
var d=new Promise(function(resolve){
    // resolve();
    resolve("fooo");
}); 
function callback(){
  console.log(d);
}
d.then(callback);  //output Promise { undefined } when d is not defined in the console.log
//whenever u create promise on your own u have to give a argument which is function with two arguments resolve and reject but resolve is must and reject is optional

// pending,resolved,reject states of promises

// Exmaple
// place for the writer of the async function to do their magic (get ketchup) and call resolve at the end with the data
// .then gets called whenever the async function resolves

// Async Wait
// again just syntactic sugar,still uses callbacks/Promises under the hood

function kiratAsynFunction(){
  let p=new Promise(function(resolve){
    setTimeout(function(){

      resolve("hi there!");
    },3000)
  });
  return p;
}
async function main(){
  let value=await kiratAsynFunction()
  // console.log("hi there"); it will give me output after 3 seconds 
  console.log(value);
  // .then removed because of async await
}
main();
// async function is just syntactic sugar for promises
console.log("after main"); //  just after await the cursor move to this line 
// at the caller side the async await
// await has to be wrapped in the async function otherwise it will not work




