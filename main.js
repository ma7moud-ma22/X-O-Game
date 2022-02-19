// بسم الله

let turn = "x";
let type = true;

let title = document.querySelector("header");

function game(id) {
  let element = document.getElementById(id);
  if (type === true) {
    if (turn === "x" && element.innerHTML == "") {
      element.innerHTML = "x";
      turn = "o";
      title.innerHTML = "o";
      element.style.cssText = `
     color: #fa90dc;
     text-shadow: 1px 1px 10px #9c1288, -1px -1px 10px #9c1288;
    `;
    } else if (turn == "o" && element.innerHTML == "") {
      element.innerHTML = "o";
      turn = "x";
      title.innerHTML = "x";
      element.style.cssText = `
      color: #6fe9fb;
      text-shadow: 1px 1px 10px #2dd0ed, -1px -1px 10px #2dd0ed; 
    `;
    }
  }

  check();
}

let squre = Array.from(document.querySelectorAll(".squre"));

function check() {
  if (
    squre[0].innerHTML == squre[1].innerHTML &&
    squre[1].innerHTML == squre[2].innerHTML &&
    squre[2].innerHTML != ""
  ) {
    if (squre[0].innerHTML == "x") {
      title.innerHTML = "X winner";
    } else {
      title.innerHTML = "O winner";
    }
    type = false;
  } else if (
    squre[3].innerHTML == squre[4].innerHTML &&
    squre[4].innerHTML == squre[5].innerHTML &&
    squre[5].innerHTML != ""
  ) {
    if (squre[3].innerHTML == "x") {
      title.innerHTML = "X winner";
    } else {
      title.innerHTML = "O winner";
    }
     type = false;
  } else if (
    squre[6].innerHTML == squre[7].innerHTML &&
    squre[7].innerHTML == squre[8].innerHTML &&
    squre[8].innerHTML != ""
  ) {
    if (squre[6].innerHTML == "x") {
      title.innerHTML = "X winner";
    } else {
      title.innerHTML = "O winner";
    }
     type = false;
  } else if (
    squre[0].innerHTML == squre[3].innerHTML &&
    squre[3].innerHTML == squre[6].innerHTML &&
    squre[6].innerHTML != ""
  ) {
    if (squre[0].innerHTML == "x") {
      title.innerHTML = "X winner";
    } else {
      title.innerHTML = "O winner";
    }
     type = false;
  } else if (
    squre[1].innerHTML == squre[4].innerHTML &&
    squre[4].innerHTML == squre[7].innerHTML &&
    squre[1].innerHTML != ""
  ) {
    if (squre[1].innerHTML == "x") {
      title.innerHTML = "X winner";
    } else {
      title.innerHTML = "O winner";
    }
     type = false;
  } else if (
    squre[2].innerHTML == squre[5].innerHTML &&
    squre[5].innerHTML == squre[8].innerHTML &&
    squre[8].innerHTML != ""
  ) {
    if (squre[2].innerHTML == "x") {
      title.innerHTML = "X winner";
    } else {
      title.innerHTML = "O winner";
    }
     type = false;
  } else if (
    squre[0].innerHTML == squre[4].innerHTML &&
    squre[4].innerHTML == squre[8].innerHTML &&
    squre[8].innerHTML != ""
  ) {
    if (squre[4].innerHTML == "x") {
      title.innerHTML = "X winner";
    } else {
      title.innerHTML = "O winner";
    }
     type = false;
  } else if (
    squre[2].innerHTML == squre[4].innerHTML &&
    squre[4].innerHTML == squre[6].innerHTML &&
    squre[2].innerHTML != ""
  ) {
    if (squre[2].innerHTML == "x") {
      title.innerHTML = "X winner";
    } else {
      title.innerHTML = "O winner";
    }
     type = false;
  }
}
let Progress = document.getElementById("progres");
document.querySelector("button").onclick = function () {
  Progress.style.cssText = `
  opacity: 1;
  z-index: 5;
  `;
  document.querySelector(".game").style.opacity = "0";
  setTimeout(function () {
    window.location.reload();
  }, 500);
};
