/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const suits = ["heart", "diamond", "spade", "club"];
const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
let topSuit = document.querySelector("#topSuit");
let number = document.querySelector("#number");
let bottomSuit = document.querySelector("#bottomSuit");

function changeCard(arr1, arr2) {
  let card = [];
  card.push(arr1[Math.floor(Math.random() * arr1.length)]);
  card.push(arr2[Math.floor(Math.random() * arr2.length)]);
  return card;
}

function changeColor(arr) {
  if (arr[0] === "heart" || arr[0] === "diamond") {
    topSuit.style.color = "red";
    number.style.color = "red";
    bottomSuit.style.color = "red";
  } else {
    topSuit.style.color = "black";
    number.style.color = "black";
    bottomSuit.style.color = "black";
  }
}

function changeSuit(arr) {
  if (arr[0] === "heart") {
    topSuit.innerHTML = "♥";
    bottomSuit.innerHTML = "♥";
  } else if (arr[0] === "diamond") {
    topSuit.innerHTML = "♦";
    bottomSuit.innerHTML = "♦";
  } else if (arr[0] === "club") {
    topSuit.innerHTML = "♣";
    bottomSuit.innerHTML = "♣";
  } else {
    topSuit.innerHTML = "♠";
    bottomSuit.innerHTML = "♠";
  }
}

function changeNumber(arr) {
  number.innerHTML = arr[1];
}

function generateCard() {
  let card = changeCard(suits, numbers);
  changeColor(card);
  changeSuit(card);
  changeNumber(card);
}

function changeTensencond() {
  setTimeout(() => {
    generateCard();
  }, 10000);
}

function changeHeight(event) {
  let card = document.querySelector("#card");
  card.style.height = event.target.value + "px";
}

function changeWidth(event) {
  let card = document.querySelector("#card");
  card.style.width = event.target.value + "%";
}

window.onload = function() {
  generateCard();
  setInterval(changeTensencond, 10000);
  changeWidth(event);
  changeHeight(event);
};

document.querySelector("#button").addEventListener("click", generateCard);
const floatingHeight = document.querySelector("#floatingHeight");
floatingHeight.addEventListener("click", changeHeight);
floatingHeight.addEventListener("change", changeHeight);
const floatingWidth = document.querySelector("#floatingWidth");
floatingWidth.addEventListener("click", changeWidth);
floatingWidth.addEventListener("change", changeWidth);
