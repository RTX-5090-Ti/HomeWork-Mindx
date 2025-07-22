// Câu 1:
console.log("Câu 1");
let student = { name: "John", age: 20 };
student.major = "Computer Science";
console.log(student);
// Câu 2:
console.log("Câu 2");
let person = { name: "Alice", age: 25, job: "Designer" };
delete person.job;
console.log(person);
// Câu 3:
console.log("Câu 3");
let car = { brand: "Toyota", model: "Camry", year: 2020 };
let num = Object.keys(car).length;
console.log(num);
// Câu 4:
console.log("Câu 4");
let product = { name: "Laptop", price: 1000 };
let array = Object.entries(product);
console.log(array);
// Câu 5:
console.log("Câu 5");
let products = [
  { name: "Phone", price: 500 },
  { name: "Camera", price: 300 },
  { name: "Tablet", price: 700 },
];
let key = products.some((a) => a.name === "Camera" && a.price === 300);
console.log(key);
// Câu 6:
console.log("Câu 6");
let productss = [
  { name: "Phone", price: 50 },
  { name: "Camera", price: 300 },
  { name: "Tablet", price: 700 },
];
let keys = productss.filter((a) => a.price > 100);
console.log(keys);
// Câu 7:
console.log("Câu 7");
let persons = { name: "Bob", age: 25, job: "Developer" };
persons.age = 30;
console.log(persons);
// Câu 8:
console.log("Câu 8");
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);
// Câu 9:
console.log("Câu 9");
let animal = { type: "Dog", name: "Buddy", age: 3 };
for (let key in animal) {
  console.log(`${key}: ${animal[key]}`);
}
// Câu 10:
console.log("Câu 10");
let cars = { brand: "BMW", model: "X5" };
for (let key in cars) {
  if (key === "color") {
    console.log("True");
  } else {
    console.log("False");
  }
}
