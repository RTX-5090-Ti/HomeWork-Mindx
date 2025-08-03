const title1 = document.querySelector(".title-h1");
title1.innerText = "Đây là nội dung";
title1.style.color = "red";
title1.style.backgroundColor = "blue";
const title2 = document.querySelector(".title2-h1");
// console.log(title2);
const butt2 = document.querySelector(".butt");
let num = true;
changeText = function () {
  if (num) {
    title2.innerHTML = "Đây là nội dung";
    title2.style.color = "red";
    title2.style.backgroundColor = "blue";
  } else {
    title2.innerHTML = "This is content";
    title2.style.color = "";
    title2.style.backgroundColor = "";
  }
  num = !num;
};
butt2.addEventListener("click", changeText);
//
const inp4 = document.getElementById("inp-4");
const butt4 = document.querySelector(".butt-4");
const textInput = document.querySelector(".show");

console.log(inp4.value);
showText = function () {
  let valuInnput = inp4.value;
  textInput.innerHTML += `<p class="show">${valuInnput}</p>`;
};
butt4.addEventListener("click", showText);
//
const inp5 = document.getElementById("inp-5");
const butt5 = document.getElementById("butt-5");
const list = document.getElementById("tasklist");
let listTask = JSON.parse(localStorage.getItem("list")) || [];

function renderTask() {
  list.innerHTML = "";
  listTask.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;
    list.appendChild(li);
  });
}

butt5.addEventListener("click", () => {
  const task = inp5.value.trim();
  if (task !== "") {
    listTask.push(task);
    localStorage.setItem("listTask", JSON.stringify(listTask));
    renderTask();
    inp5.value = "";
  }
});

renderTask();
