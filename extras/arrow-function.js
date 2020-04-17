var square= x=> result= (x*x);
console.log(square(20))


var greet= {
  name: 'waris',
  sayHi () {
    console.log(`hi ${this.name}`);
    console.log(arguments);
  }
};
greet.sayHi(1,2,3);
