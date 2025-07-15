// Câu 1:
const result1 = document.getElementById("result-1");
let result = 0;
for (let i = 1; i <= 100; i++) {
  result = result + i;
}
console.log(result);
result1.innerHTML = `kết quả là: ${result}`;
// Câu 2:
const result2 = document.getElementById("result-2");
for (let i = 0; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i);
    result2.innerHTML += `${i}, `;
  }
}
// Câu 3:
const input3 = document.getElementById("input-3");
const butt3 = document.getElementById("butt-3");
const result3 = document.getElementById("result-3");

const inTerger = function () {
  const num3 = Number(input3.value);
  let inTerger = 1;
  if (Number.isInteger(num3)) {
    for (let i = 1; i <= num3; i++) {
      inTerger *= i;
    }
    console.log(inTerger);
    result3.innerHTML = `Kết quả  là: ${inTerger}`;
  } else {
    console.log("Số nhập vào không phải là  số nguyên");
  }
};
butt3.addEventListener("click", inTerger);
// Câu 4:
let num4 = 0;
for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 10; j++) {
    num4 = i * j;
    console.log(`${i} * ${j} = ${num4}`);
  }
}
// Câu 5:
const input4 = document.getElementById("input-4");
const butt4 = document.getElementById("butt-4");
const result4 = document.getElementById("result-4");

const toBinary = function () {
  let numTobinary = Number(input4.value);
  if (!Number.isInteger(numTobinary) || numTobinary < 0) {
    console.log("Nhâp vào  số nguyên không âm");
    result4.innerHTML = "Nhâp vào  số nguyên không âm";
    return;
  }
  if (numTobinary === 0) {
    console.log("0");
    result4.innerHTML = "0";
    return;
  }
  let binary = "";
  while (numTobinary > 0) {
    binary = (numTobinary % 2) + binary;
    numTobinary = Math.floor(numTobinary / 2);
  }
  console.log(binary);
  result4.innerHTML = `${binary}`;
};
butt4.addEventListener("click", toBinary);
// Câu  6:
const input5 = document.getElementById("input-5");
const butt5 = document.getElementById("butt-5");
const result5 = document.getElementById("result-5");
const squareRoot = function () {
  const num5 = Number(input5.value);
  if (!Number.isInteger(num5) || num5 < 0) {
    console.log("Nhâp vào  số nguyên không âm");
    result5.innerHTML = "Nhâp vào  số nguyên không âm";
    return;
  }
  let S = 0;
  for (let i = 0; i < num5; i++) {
    S = Math.sqrt(i + S);
  }
  console.log(S);
  result5.innerHTML = `Kết quả là: ${S}`;
};
butt5.addEventListener("click", squareRoot);
// Câu 7:
const input6 = document.getElementById("input-6");
const butt6 = document.getElementById("butt-6");
const result6 = document.getElementById("result-6");
const squareRoott = function () {
  const num6 = Number(input6.value);
  if (!Number.isInteger(num6) || num6 < 0) {
    console.log("Nhâp vào  số nguyên không âm");
    result6.innerHTML = "Nhâp vào  số nguyên không âm";
    return;
  }
  let S = 0;
  for (let i = num6; i >= 1; i--) {
    S = Math.sqrt(S + i);
  }
  console.log(S);
  result6.innerHTML = `Kết quả là: ${S}`;
};
butt6.addEventListener("click", squareRoott);
