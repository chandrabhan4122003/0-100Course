const users={
  "user1":{name:"John",age:30},
  "user2":{name:"Jane",age:25},
  "user3":{name:"Bob",age:40}
  }
//JSON parse
const user=JSON.parse(users);
console.log(user);
//JSON Strigify
const userStr=JSON.stringify(user);
