const girdBox = document.querySelector(".content-left");
const startButt = document.querySelector(".header-butt-start");
const endButt = document.querySelector(".header-butt-end");
const clock = document.querySelector(".right-time-count");
const table = document.querySelector(".footer-table");
const youWin = document.querySelector(".header-noice");
// youWin.style.display = "block";
console.log(youWin);
// console.log(girdBox);
const items = [...Array(11).keys()].map((n) => n + 1).concat(0);
let itemsCopy = [...items];
console.log(itemsCopy);

function renderGirdBox() {
  girdBox.innerHTML = ""; //xoá lưới gird cũ
  itemsCopy.forEach((n, index) => {
    const cell = document.createElement("div");
    // Tao ra cac o 1 -> 11
    switch (n) {
      case 1:
        cell.className = "left-item" + " one";
        break;
      case 2:
        cell.className = "left-item" + " two";
        break;
      case 3:
        cell.className = "left-item" + " three";
        break;
      case 4:
        cell.className = "left-item" + " four";
        break;
      case 5:
        cell.className = "left-item" + " five";
        break;
      case 6:
        cell.className = "left-item" + " six";
        break;
      case 7:
        cell.className = "left-item" + " seven";
        break;
      case 8:
        cell.className = "left-item" + " eight";
        break;
      case 9:
        cell.className = "left-item" + " nine";
        break;
      case 10:
        cell.className = "left-item" + " ten";
        break;
      case 11:
        cell.className = "left-item" + " eleven";
        break;
      default:
        cell.className = "left-item" + " black";
    }
    if (n !== 0) {
      cell.textContent = n;
    }
    cell.addEventListener("click", () => testMove(index));
    girdBox.appendChild(cell);
  });
}
// Hàm xáo trộn các cell
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
function shuffleItemsCopy() {
  itemsCopy = shuffle([...itemsCopy]);
  renderGirdBox();
}
// Đếm số nghịch thế
function inversions(arr) {
  const valid = arr.filter((x) => x !== 0);
  let invalid = 0;
  for (let i = 0; i < valid.length; i++) {
    for (let j = i + 1; j < valid.length; j++) {
      if (valid[i] > valid[j]) {
        invalid++;
      }
    }
  }
  return invalid;
}
function isSovable(arr) {
  const invalid = inversions(arr);
  const indexBlank = arr.indexOf(0);
  const rowFromBottom = 3 - Math.floor(indexBlank / 4); // 3 hang, 4 cot
  return (invalid + rowFromBottom) % 2 === 1; // nếu lẽ trả về true, chản thì trả vêf false
}
function shuffleSolvable() {
  startButt.classList.toggle("hidden");
  endButt.classList.toggle("show");

  resetTime();
  startTime();
  let arr;
  do {
    arr = shuffle([...items]);
  } while (!isSovable(arr) || arr.every((a, b) => a === items[b]));
  itemsCopy = arr;
  renderGirdBox();
  //   setupOneMoveToWin();s
}
function nextToIndex(i) {
  const res = [];
  const row = Math.floor(i / 4); //row = 0-> hàng 1,row = 1-> hàng 2,row = 2-> hàng3
  const colum = i % 4; // colum = 0->  cột 1,....colum = 3-> cột 4
  if (row > 0) res.push(i - 4); // có ô phía trên và index là i-4
  if (row < 2) res.push(i + 4); // có ô phía dưới và index là i+4
  if (colum > 0) res.push(i - 1); // có ô bên trái và index là i+1
  if (colum < 3) res.push(i + 1); // có ô bên phải và index là i-1
  return res;
}
function testMove(index) {
  const blank = itemsCopy.indexOf(0); // Tìm ô đen đang ở đâu
  const nextIndex = nextToIndex(blank); // tim ô kế bên ô đen
  moves++;
  if (!nextIndex.includes(index)) {
    return; // nếu không có ô kế  thì bỏ qua
  }
  [itemsCopy[blank], itemsCopy[index]] = [itemsCopy[index], itemsCopy[blank]]; //đỏi chổ
  renderGirdBox();
  if (isWin()) {
    countGame++;
    stopTime();
    renderIf();
    moves = 0;
    fireWinEffects();
    youWin.style.opacity = "1";
    // alert("Bạn đã thắng");
  }
}
window.addEventListener("keydown", (e) => {
  const blank = itemsCopy.indexOf(0); // Tìm vị trí ô màu đenn
  const row = Math.floor(blank / 4); // hàng trống
  const colum = blank % 4; //  cột  trống
  let target = null;
  moves++;
  if (["ArrowDown", "S", "s"].includes(e.key) && row < 2) target = blank + 4;
  if (["ArrowUp", "W", "w"].includes(e.key) && row > 0) target = blank - 4;
  if (["ArrowRight", "D", "d"].includes(e.key) && colum < 3) target = blank + 1;
  if (["ArrowLeft", "A", "a"].includes(e.key) && colum > 0) target = blank - 1;

  if (target !== null) {
    [itemsCopy[blank], itemsCopy[target]] = [
      itemsCopy[target],
      itemsCopy[blank],
    ];
  }
  renderGirdBox();
  if (isWin()) {
    countGame++;
    stopTime();
    renderIf();
    moves = 0;
    fireWinEffects();
    youWin.style.opacity = "1";
    // alert("Bạn đã thắng");
  }
  e.preventDefault();
});
// Hàm kiểm tra là thănggs chưa
function isWin() {
  return itemsCopy.every((value, index) => value === items[index]);
}
let timer = null;
let ms = 0;
let moves = 0; //Số lần di chuyển
let countGame = 0; // Số lần chơi
function countTime(ms) {
  const s = Math.floor(ms / 1000);
  const m = Math.floor(s / 60);
  const h = s % 60;
  return `${String(m).padStart(2, "0")}:${String(h).padStart(2, "0")}`;
}
function startTime() {
  if (timer) return;
  timer = setInterval(() => {
    ms += 1000;
    clock.textContent = countTime(ms);
  }, 1000);
}
function stopTime() {
  clearInterval(timer);
  timer = null;
}
function resetTime() {
  stopTime();
  ms = 0;
  clock.textContent = "00:00";
}
function renderIf() {
  table.innerHTML += `
        <tr>
            <td>${countGame}</td>
            <td>${moves} lần</td>
            <td>${countTime(ms)}</td>
          </tr>
    `;
}

// renderGirdBox();
// shuffleItemsCopy();

startButt.addEventListener("click", shuffleSolvable);
endButt.addEventListener("click", () => {
  startButt.classList.toggle("hidden");
  endButt.classList.toggle("show");
  stopTime();
  resetTime();
  //   shuffleSolvable();
  itemsCopy = [...items];
  renderGirdBox();
  youWin.style.opacity = "0";
});

function setupOneMoveToWin() {
  itemsCopy = [...items];
  itemsCopy[10] = 0;
  itemsCopy[11] = 11;
  renderGirdBox();
}

// Hệu ưuns
function fireWinEffects() {
  const end = Date.now() + 1500; // bắn 1.5 giây
  (function frame() {
    confetti({
      particleCount: 5,
      spread: 70,
      startVelocity: 55,
      origin: { x: Math.random(), y: Math.random() - 0.2 },
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();

  // âm thanh (tùy chọn)
  const sfx = new Audio("./audio/11l-victory-1749704552668-358772.mp3"); // tải file về
  sfx.volume = 0.5;
  sfx.play().catch(() => {});
}
