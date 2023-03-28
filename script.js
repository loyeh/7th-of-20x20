const words = ["programming", "fundamental", "technical", "medication", "approach", "disaster", "global", "intermediate", "billionaire"];
const container = document.getElementById("container");
const wrong = document.getElementById("wrong");
const gameOver = document.getElementById("gameOver");
const congrat = document.getElementById("congrats");
const repeat = document.getElementById("repeat");
const wrongLetters = [];
const rightLetters = [];
let wrongIndex = 0;
const indexes = [];

function chooseWord(wordArr) {
  const num = wordArr.length;
  let rand = Math.floor(Math.random() * num);
  const randomWord = wordArr[rand];
  console.log(randomWord);
  return randomWord;
}

function wordArr(word) {
  const wordLength = word.length;
  const wordArray = [];
  for (let i = 0; i < wordLength; i++) {
    wordArray.push(word[i]);
  }
  return wordArray;
}

function wordPlaceHolder(wordArray) {
  for (let i = 0; i < wordArray.length; i++) {
    const letterSpan = document.createElement("div");
    letterSpan.className = "letter";
    letterSpan.id = `_${i}`;
    container.appendChild(letterSpan);
  }
}

function checkLetter(wordArray, letter) {
  if (wordArray.includes(`${letter}`) && !rightLetters.includes(`${letter}`)) {
    rightLetters.push(letter);
  } else if (!wordArray.includes(`${letter}`) && !wrongLetters.includes(`${letter}`)) {
    wrongLetters.push(letter);
    wrongIndex++;
  } else if (rightLetters.includes(`${letter}`) || wrongLetters.includes(`${letter}`)) {
    repeated();
  }

  wordArray.forEach((element, i) => {
    if (element == letter) {
      document.getElementById(`_${i}`).innerText = letter;
      wordLength--;
      if (!indexes.includes(i)) {
        indexes.push(i);
      }
    }
  });
  if (indexes.length == wordArray.length) {
    win();
  }
  // console.log("indexes: ", indexes);
  // console.log("wrongLetters: ", wrongLetters);
  // console.log("rightLetters: ", rightLetters);
  drawMan(wrongIndex);
}

//canvas primary settings
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let x = 50;
let y = 200;
ctx.strokeStyle = "#FFFFFF";
ctx.lineWidth = 4;

function hang() {
  ctx.moveTo(x - 50, y);
  ctx.lineTo(x + 50, y);
  ctx.moveTo(x, y);
  ctx.lineTo(x, y - 200);
  ctx.lineTo(x + 100, y - 200);
  ctx.lineTo(x + 100, y - 160);
  ctx.stroke();
}

function head() {
  ctx.beginPath();
  ctx.arc(x + 100, y - 140, 20, 0, 2 * Math.PI);
  ctx.stroke();
}
function Body() {
  ctx.moveTo(x + 100, y - 120);
  ctx.lineTo(x + 100, y - 60);
  ctx.stroke();
}
function leftLeg() {
  ctx.moveTo(x + 100, y - 60);
  ctx.lineTo(x + 70, y - 30);
  ctx.stroke();
}
function rightLeg() {
  ctx.moveTo(x + 100, y - 60);
  ctx.lineTo(x + 130, y - 30);
  ctx.stroke();
}
function leftHand() {
  ctx.moveTo(x + 100, y - 90);
  ctx.lineTo(x + 70, y - 120);
  ctx.stroke();
}
function rightHand() {
  ctx.moveTo(x + 100, y - 90);
  ctx.lineTo(x + 130, y - 120);
  ctx.stroke();
}
function drawMan(i) {
  switch (i) {
    case 1:
      head();
      break;
    case 2:
      Body();
      break;
    case 3:
      leftLeg();
      break;
    case 4:
      rightLeg();
      break;
    case 5:
      leftHand();
      break;
    case 6:
      rightHand();
      break;
    case 7:
      lost();
  }
}

const word = chooseWord(words);
const wordArray = wordArr(word);
let wordLength = word.length;

hang();
wordPlaceHolder(wordArray);

function hangMan(rightLetters, wrongLetters) {}

function repeated() {
  repeat.classList.add("active");
  setTimeout(() => {
    repeat.classList.remove("active");
  }, 1800);
}

function lost() {
  gameOver.classList.add("active");
}

function win() {
  congrat.classList.add("active");
}

window.addEventListener("keypress", (event) => {
  const letter = event.key;
  // console.log(letter);
  checkLetter(wordArray, letter);
  wrong.innerText = wrongLetters.toString();
  if (indexes.length == wordArray.length) {
    win();
  }
});
