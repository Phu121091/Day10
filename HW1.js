let person = {
  name: `Bob`,
  occupation: `web developer`,
  hobbles: `painting`,
};
//các cách truy cập:
//1. obj.key
console.log(person.name);
//2.obj[`key`]
console.log(person.occupation);
//3.{key} = obj
const {hobbles} = person;
console.log(hobbles);

