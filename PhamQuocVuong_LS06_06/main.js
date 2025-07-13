// Câu 1:
const length = 10;
const width = 15;
const area = length * width;
const perimeter = (length + width) * 2;
console.log("Câu 1");
console.log("cho length bằng 10 và width bằng 15");
console.log(`Diện tích là: ${area}
Chi vi là: ${perimeter}`);
// Câu 2:
const seconds = document.getElementById("second");
const button = document.getElementById("butt");
const result1 = document.getElementById("result-1");
const textSecond = function () {
  const num1 = seconds.value;
  const hours = (num1 - (num1 % 3600)) / 3600;
  const minute = ((num1 % 3600) - ((num1 % 3600) % 60)) / 60;
  const second = num1 - minute * 60 - hours * 3600;
  console.log("Câu 2");
  console.log(`Số nhập vào là: ${num1}`);
  console.log(`Sau khi chuyển đổi: ${hours}h ${minute}m ${second}s`);
  result1.innerHTML = `Sau khi chuyển đổi: ${hours}h ${minute}m ${second}s`;
};
button.addEventListener("click", textSecond);
// Câu 3:
const luyThua = document.getElementById("luythua");
const coSo = document.getElementById("coso");
const butt2 = document.getElementById("butt-2");
const result2 = document.getElementById("result-2");
const number2 = function () {
  const num2 = Math.pow(coSo.value, luyThua.value);

  console.log(
    `Kết quả của ${coSo.value} luỹ thừa ${luyThua.value} là: ${num2}`
  );
  result2.innerHTML = `Kết quả của ${coSo.value} luỹ thừa ${luyThua.value} là: ${num2}`;
};
butt2.addEventListener("click", number2);
// Câu 4:
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const butt3 = document.getElementById("butt-3");
const result3 = document.getElementById("result-3");
const average = function () {
  const ones = Number(one.value);
  const twos = Number(two.value);
  const threes = Number(three.value);
  let num3 = ones + twos + threes;
  console.log(num3);
  console.log(`Trung bình cộng ba số là: ${num3}`);
  result3.innerHTML = `Trung bình cộng ba số là: ${num3}`;
};
butt3.addEventListener("click", average);
// Câu 5:
const numX1 = document.getElementById("numx-1");
const numY1 = document.getElementById("numy-1");
const numX2 = document.getElementById("numx-2");
const numY2 = document.getElementById("numy-2");
const butt4 = document.getElementById("butt-4");
const result4 = document.getElementById("result-4");
const Coordinates = function () {
  const X1 = Number(numX1.value);
  const Y1 = Number(numY1.value);
  const X2 = Number(numX2.value);
  const Y2 = Number(numY2.value);
  let num3 = Math.sqrt((X2 - X1) ** 2 + (Y2 - Y1) ** 2);
  console.log(num3);
  console.log(`Khoảng cách giữa hai điểm trong không gian là: ${num3}`);
  result4.innerHTML = `Khoảng cách giữa hai điểm trong không gian là: ${num3}`;
};
butt4.addEventListener("click", Coordinates);
// Câu 6:
const numI = document.getElementById("num-1");
const numII = document.getElementById("num-2");
const numIII = document.getElementById("num-3");
const butt5 = document.getElementById("butt-5");
const result5 = document.getElementById("result-5");
const max = function () {
  const X1 = Number(numI.value);
  const X2 = Number(numII.value);
  const X3 = Number(numIII.value);
  let num3 = X1 > X2 && X1 > X3 ? true : false;
  console.log(num3);
  console.log(`Số đầu tiên có phải là số lớn nhất ? => ${num3}`);
  result5.innerHTML = `Số đầu tiên có phải là số lớn nhất ? => ${num3}`;
};
butt5.addEventListener("click", max);
// Câu 7:
const stringI = document.getElementById("string-1");
const strinngII = document.getElementById("string-2");
const butt6 = document.getElementById("butt-6");
const result6 = document.getElementById("result-6");
const compareString = function () {
  let strings = stringI.value === strinngII.value;

  console.log(strings);
  console.log(`Hai chuổi có giống nhau ? => ${strings}`);
  result6.innerHTML = `Hai chuổi có giống nhau ? => ${strings}`;
};
butt6.addEventListener("click", compareString);
// Câu 8:
const num7 = document.getElementById("num-7");
const butt7 = document.getElementById("butt-7");
const result7 = document.getElementById("result-7");
const checkNumber = function () {
  let numberValue = Number(num7.value);
  let number = numberValue >= 0;

  console.log(number);
  console.log(`Output: ${numberValue} ${number}`);
  if (numberValue === 0) {
    result7.innerHTML = `${numberValue} là số nguyên`;
  } else if (number) {
    result7.innerHTML = `${numberValue} là số dương`;
  } else {
    result7.innerHTML = `${numberValue} là số âm`;
  }
};
butt7.addEventListener("click", checkNumber);
// Câu 9:
const year = document.getElementById("year");
const butt8 = document.getElementById("butt-8");
const result8 = document.getElementById("result-8");
const checkYear = function () {
  let number = Number(year.value);
  let result =
    number % 400 === 0 || (number % 4 === 0 && number % 100 !== 0)
      ? "Nhuận"
      : "Không nhuận";
  console.log(`${number} là năm ${result}`);
  result8.innerHTML = `${number} là năm ${result}`;
};
butt8.addEventListener("click", checkYear);
// Câu 10:
const hourI = document.getElementById("hour-1");
const minuteI = document.getElementById("minute-1");
const hourII = document.getElementById("hour-2");
const minuteII = document.getElementById("minute-2");
const butt9 = document.getElementById("butt-9");
const result9 = document.getElementById("result-9");
const compareTime = function () {
  const h1 = Number(hourI.value);
  const m1 = Number(minuteI.value);
  const h2 = Number(hourII.value);
  const m2 = Number(minuteII.value);
  if (
    h1 >= 0 &&
    h1 < 24 &&
    h2 >= 0 &&
    h2 < 24 &&
    m1 >= 0 &&
    m1 <= 60 &&
    m2 >= 0 &&
    m2 <= 60
  ) {
    let num1 = h1 * 60 + m1;
    let num2 = h2 * 60 + m2;
    if (num1 > num2) {
      console.log(`${h1}h${m1}m lớn hơn ${h2}h${m2}m`);
      result9.innerHTML = `${h1}h${m1}m lớn hơn ${h2}h${m2}m`;
    } else if (num1 < num2) {
      console.log(`${h1}h${m1}m nhỏ hơn ${h2}h${m2}m`);
      result9.innerHTML = `${h1}h${m1}m nhỏ hơn ${h2}h${m2}m`;
    } else {
      console.log(`${h1}h${m1}m bằng ${h2}h${m2}m`);
      result9.innerHTML = `${h1}h${m1}m bằng ${h2}h${m2}m`;
    }
  } else {
    console.log("Nhập sai rồi kkk");
    result9.innerHTML = `Nhập sai thời gian`;
  }
};
butt9.addEventListener("click", compareTime);
