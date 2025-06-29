class Animal{
  constructor(name,legCount,speaks){
    this.name=name;
    this.legCount=legCount;
    this.speaks=speaks;
  }
  speak(){
    console.log("he there "+this.speaks);
  }
}
let dog=new Animal("dog",4,"bhow bhow");
dog.speak();