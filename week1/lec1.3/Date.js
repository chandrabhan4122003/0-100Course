const currentDate=new Date();
console.log(currentDate.getDate());
console.log(currentDate.getYear());
console.log("time in milliseconds from 1970",currentDate.getTime());
//EPOCH TIMESTAMP
console.log("time in seconds from 1970",currentDate.getTime()/1000);