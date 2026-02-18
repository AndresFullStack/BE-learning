function Person(fullName, age) {
  this.fullName = fullName;
  this.age = age;
}

const me = new Person("william", 22);

console.log(me.fullName);
