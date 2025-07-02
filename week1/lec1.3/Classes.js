class Animal{
  constructor(name,legCount,speaks){
    this.name=name;
    this.legCount=legCount;
    this.speaks=speaks;
  }
  static myType(){
    console.log("Animal");
  }
  speak(){
    console.log("he there "+this.speaks);
  }
}
console.log(Animal.speak());
let dog=new Animal("dog",4,"bhow bhow");
dog.speak();f