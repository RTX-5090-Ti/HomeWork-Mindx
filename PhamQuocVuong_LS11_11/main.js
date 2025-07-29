// Câu 1:
console.log("Câu 1");
let names = ["John", "Alice"];
names.push("Tom");
console.log(names);
// Câu 2:
console.log("Câu 2");
let nums2 = [1, 2, 3, 4];
let result2 = nums2.map((x) => x ** 2);
console.log(result2);
// Câu 3:
console.log("Câu 3");
let nums3 = [5, 10, 15, 20, 25];
let result3 = nums3.filter((x) => x % 2 === 0);
console.log(result3);
// Câu 4:
console.log("Câu 4");
let names4 = [
  { name: "John", score: 7 },
  { name: "Alice", score: 9 },
  { name: "Tom", score: 8 },
];
let result4 = names4.find((x) => x.score >= 8);
console.log(result4);
// Câu 5:
console.log("Câu 5");
let nums5 = [3, 5, 8, 12, 15];
let result5 = nums5.findIndex((x) => x > 10);
console.log(result5);
// Câu 6:
console.log("Câu 6");
let names6 = ["a", "b", "c", "d", "e"];
names6.splice(3, 1, "f");
console.log(names6);
// Câu 7:
console.log("Câu 7");
let names7 = { name: "Tom", age: 21, major: "Computer Science" };
console.log(Object.keys(names7));
// Câu 8:
console.log("Câu 8");
let names8 = { name: "Tom", age: 21, major: "Computer Science" };
console.log(Object.values(names8));
// Câu 9:
console.log("Câu 9");
let num8 = { a: 1, b: 2 };
let num9 = { c: 3, d: 4 };
let nums9 = { ...num8, ...num9 };
console.log(nums9);
// Câu 10:
console.log("Câu 10");
let nums10 = [1, 2, 3];
let num10 = [...nums10, 4];
console.log(num10);
// Câu 11:
console.log("Câu 11");
let num11 = { name: "Alice", age: 25 };
let num111 = { job: "Developer" };
console.log({ ...num11, ...num111 });
// Câu 12:
console.log("Câu 12");
let name12 = ["john", "alice", "tom"];
let result12 = name12.map((x) => x.toUpperCase());
console.log(result12);
// Câu 13:
console.log("Câu 13");
let nums13 = [1, 2, 3, 4, 5, 6];
let result13 = nums13
  .filter((x) => x % 2 === 0)
  .reduce((a, b) => {
    return a + b;
  }, 0);
console.log(result13);
// Câu 14:
console.log("Câu 14");
let nums14 = [1, 2, 2, 3, 4, 4, 5];
let newArray = [];
for (let x of nums14) {
  if (!newArray.includes(x)) {
    newArray.push(x);
  }
}
console.log(newArray);
// Câu 15:
console.log("Câu 15");
let names15 = ["a", "b", "a", "c", "b", "a"];
let result15 = names15.reduce((x, y) => {
  x[y] = (x[y] || 0) + 1;
  return x;
}, {});
console.log(result15);
