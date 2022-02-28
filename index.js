let menu = document.getElementById("menu");
let btnMenu = document.getElementById("btn-Menu");
let buttons = document.querySelectorAll(".add-to-cart");

// menu

menu.style.maxHeight = "0px";

btnMenu.addEventListener("click", function toggleMenu() {
  menu.style.display = "block";
  if (menu.style.maxHeight === "0px" && menu.style.display === "block") {
    menu.style.maxHeight = "140px";
  } else {
    menu.style.maxHeight = "0px";
    menu.style.display = "none";
  }
});

// slider

let arrowLeft = document.getElementById("arrow-left");
let arrowRight = document.getElementById("arrow-right");

let count = 0;
let column1 = document.getElementById("col-1");
let column3 = document.getElementById("col-3");
let column2 = document.getElementById("col-2");
let column4 = document.getElementById("col-4");
let column5 = document.getElementById("col-5");
let column6 = document.getElementById("col-6");

arrowLeft.addEventListener("click", function () {
  count -= 1;
  if (count === 0) {
    column3.style.display = "none";
    column4.style.display = "none";
    column1.style.display = "block";
    column2.style.display = "block";
    column5.style.display = "none";
    column6.style.display = "none";
  } else if (count === 2) {
    column1.style.display = "block";
    column3.style.display = "block";
  } else {
    count = 0;
    count += 1;
    column1.style.display = "none";
    column3.style.display = "none";
    column2.style.display = "none";
    column4.style.display = "none";
    column5.style.display = "block";
    column6.style.display = "block";
  }
  console.log(count);
});

arrowRight.addEventListener("click", function () {
  count += 1;
  if (count === 1) {
    column1.style.display = "none";
    column3.style.display = "block";
    column2.style.display = "none";
    column4.style.display = "block";
  } else if (count === 2) {
    column3.style.display = "none";
    column4.style.display = "none";
    column5.style.display = "block";
    column6.style.display = "block";
    column1.style.display = "none";
    column2.style.display = "none";
  } else {
    count = 0;
    column1.style.display = "block";
    column5.style.display = "none";
    column2.style.display = "block";
    column6.style.display = "none";
    column4.style.display = "none";
  }

  console.log(count);
});
