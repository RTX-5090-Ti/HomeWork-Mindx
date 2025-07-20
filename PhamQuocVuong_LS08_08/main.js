// Câu 1:
console.log("Câu 1:");
const names1 = ["Alice", "Bod", "Charlie", "David", "Eve"];
console.log(names1[0]);
console.log(names1[names1.length - 1]);
// Câu 2:
console.log("Câu 2:");
let names2 = ["John", "Jane", "Jim", "Jake"];
names2[2] = "Mary";
console.log(names2);
// Câu 3:
console.log("Câu 3:");
const names3 = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
for (let i = 0; i < names3.length; i++) {
  console.log(names3[i]);
}
// Câu 4:
console.log("Câu 4:");
const names4 = ["Alice", "Bob", "Charlie", "David"];
names4.push("Mindx");
console.log(names4);
// Câu 5:
console.log("Câu 5:");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    console.log(numbers[i]);
  }
}
// Câu 6:
console.log("Câu 6:");
const names6 = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
if (names6.includes("David")) {
  console.log("Tìm Thấy Rồi");
} else {
  console.log("Không Tìm Thấy");
}
// Câu 7:
console.log("Câu 7:");
const numbers2 = [1, 2, 3, 4, 2, 1, 3, 2, 4, 2];
let found = 0;
for (let i = 0; i < numbers2.length; i++) {
  if (numbers2[i] === 2) {
    found++;
  }
}
console.log(found);
// Câu 8:
console.log("Câu 8:");
const numbers3 = [5, 2, 9, 3, 7, 11, 8];
let max = Math.max(...numbers3);
console.log(max);
// Câu 9:
console.log("Câu 9:");
const array = [1, 2, 3, 4, 5];
console.log(array.reverse());
// Câu 10:
console.log("Câu 10:");
const duplicatesArray = [1, 2, 2, 3, 4, 4, 5];
let newArray = [];
for (let i = 0; i < duplicatesArray.length; i++) {
  if (!newArray.includes(duplicatesArray[i])) {
    newArray.push(duplicatesArray[i]);
  }
}
console.log(newArray);
// Câu 11:
console.log("Câu 11:");
const numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let i = 0; i < numbers4.length; i++) {
  sum += numbers4[i];
}
console.log(sum);
