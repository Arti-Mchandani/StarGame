let starDiv = document.querySelector("#stars");
let countDiv = document.querySelector("#counts");
let min = 0,
  max = 8;
let numArr = [];
let sum = 0;
let starsNum;
let starMake = () => {
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  starsNum = 9 - randomNum;
  starDiv.innerHTML = "";
  for (let i = 8; i >= randomNum; i--) {
    let starNum = document.createElement("div");
    starNum.classList.add("star", "pd-20");
    starDiv.appendChild(starNum);
    starNum.innerHTML = "*";
  }
};

starMake();
for (let i = 1; i <= 9; i++) {
  let countNum = document.createElement("div");
  countNum.setAttribute("data-value", i);
  countNum.classList.add("num", "pd-20");
  countDiv.appendChild(countNum);
  countNum.innerHTML = i;
}
let countsquare = document.querySelectorAll(".num");
for (let j = 0; j <= 8; j++) {
  countsquare[j].addEventListener("click", (e) => {
    numArr.push(+e.target.dataset.value);
    let sums = numArr.reduce((acc, num) => {
      return acc + num;
    });
    if (starsNum == +sums) {
      e.target.style.background = "red";
      e.target.classList.add("disabled");
      starMake();
      numArr = [];
    } else {
      e.target.classList.add("disabled");
      e.stopPropagation();
      e.target.style.background = "pink";
    }
  });
}
setInterval(() => {
  starMake();
  countsquare.forEach((l) => {
    l.style.background = "white";
    numArr = [];
  });
}, 10000);


