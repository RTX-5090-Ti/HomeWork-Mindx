// Câu 1:
console.log("Câu 1");
const a = 3;
const b = 4;
const result = (x) => {
  return a * x + b;
};
console.log(result(5));
// Câu 2:
console.log("Câu 2");
const result2 = (a, b) => {
  return a * b;
};
console.log(result2(10, 15));
// Câu 3:
console.log("Câu 3");
const result3 = (x) => {
  let s = Math.PI * x ** 2;
  let c = parseFloat(s.toFixed(2));
  return c;
};
console.log(result3(5));
// Câu 4:
console.log("Câu 4");
let n = 16;
const result4 = (x) => {
  let y = 0;
  for (let i = 1; i <= x; i++) {
    if (x % i === 0) {
      y += 1;
    }
  }
  if (y === 2) {
    console.log("Là  số nguyên");
    //   break;
  } else {
    console.log("Không là  số nguyên");
  }
};
result4(n);
// Câu 5:
console.log("Câu 5");
const result5 = (...sum) => {
  let s = 0;
  for (let i = 0; i < sum.length; i++) {
    s += sum[i];
  }
  return s;
};
console.log(result5(1, 2, 3, 4, 5));
// Câu 6:
console.log("Câu 6");
const start = 5;
const end = 10;
const result6 = (x, y) => {
  let sum = 0;
  for (let i = x; i <= y; i++) {
    sum += i;
  }
  return sum;
};
console.log(result6(start, end));
// Câu 7:
console.log("Câu 7");
const str = "madam";
const cleanedStr = str
  .replace(/\s+/g, "")
  .toLowerCase()
  .replace(/[^a-zA-Z0-9]/g, "");
const lengthStr = cleanedStr.length;
const check = (x) => {
  let checkTrue = true;
  for (let i = 0; i < Math.floor(x / 2); i++) {
    if (cleanedStr[i] !== cleanedStr[x - 1 - i]) {
      checkTrue = false;
      break;
    }
  }
  if (checkTrue) {
    console.log("Đối xứng");
  } else {
    console.log("Không đối xứng");
  }
};
check(lengthStr);
// Câu 8:
console.log("Câu 8");
const x = [2, 4, 6, 8, 10];
const y = (s) => {
  let even = true;
  for (let i = 0; i < s.length; i++) {
    if (s[i] % 2 !== 0) {
      even = false;
      break;
    }
  }
  if (even) {
    console.log("Toàn chẳn");
  } else {
    console.log("Có số lẻ");
  }
};
y(x);
// Câu 9:
console.log("Câu 9");
const number = [3, -1, 4, -2, 5];
const result9 = (x) => {
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] >= 0) {
      sum += x[i];
    }
  }
  return sum;
};
console.log(result9(number));
// Câu 10:
console.log("Câu 10");
const result10 = (...num) => {
  let max = num[0];
  for (let i = 0; i < num.length; i++) {
    if (num[i] > max) {
      max = num[i];
    }
  }
  return max;
};
console.log(result10(1, 3, 7, 0, -2));
// Câu 11:
console.log("Câu 11");
const number1 = [12, 33, 45, 7, 89];
const arrange = (x) => {
  let y;
  for (let i = 0; i < x.length; i++) {
    for (j = 0 + i; j < x.length; j++) {
      if (x[i] > x[j]) {
        y = x[i];
        x[i] = x[j];
        x[j] = y;
      }
    }
  }
  return x;
};
console.log(arrange(number1));
// Câu 12:
console.log("Câu 12");
const number3 = [2, 5, 2, 7, 9, 10];
const result12 = (arr, k) => {
  let number = [];
  for (let i = 0; i < arr.length; i++) {
    if (!number.includes(arr[i])) {
      number.push(arr[i]);
    }
  }
  console.log(arr);
  if (k <= number.length) {
    let y;
    for (let i = 0; i < number.length; i++) {
      for (j = 0 + i; j < number.length; j++) {
        if (number[i] < number[j]) {
          y = number[i];
          number[i] = number[j];
          number[j] = y;
        }
      }
    }
    console.log(number);
    console.log(`Số lớn thứ ${k} trong mãng là: ${number[k - 1]}`);
  } else {
    console.log(number);
    console.log(`k bằng ${k} lớn hơn độ dài mãng rồi, không hợp lệ`);
  }
};
result12(number3, 9);
// Câu 13:
console.log("Câu 13");
const number4 = [1, 2, 3, 2, 1, 1, 4, 5];
const result13 = (arr) => {
  let maxCount = 0;
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let num = arr.filter((x) => x === arr[i]).length;
    if (num > maxCount || (num === maxCount && arr[i] > max)) {
      maxCount = num;
      max = arr[i];
    }
  }
  return max;
};
console.log(result13(number4));
// Câu 14:
console.log("Câu 14");
let splitWords = "This is a test";
let xun = splitWords.split(" ");
console.log(xun);
// Câu 15:
console.log("Câu 15");
const da = { a: 1, b: "hello", c: 3, d: "world" };
const result15 = (x) => {
  let sum = 0;
  for (key in x) {
    if (typeof x[key] === "number") {
      sum += x[key];
    }
  }
  return sum;
};
console.log(result15(da));
