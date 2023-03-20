const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let x = innerWidth / 2;
let y = innerHeight / 2;
ctx.strokeStyle = "#FFFFFF";
ctx.lineWidth = 4;
ctx.moveTo(x - 50, y);
ctx.lineTo(x + 50, y);
ctx.moveTo(x, y);
ctx.lineTo(x, y - 200);
ctx.lineTo(x + 100, y - 200);
ctx.lineTo(x + 100, y - 160);
ctx.stroke();

function head() {
  ctx.beginPath();
  ctx.arc(x + 100, y - 140, 20, 0, 2 * Math.PI);
  ctx.stroke();
}
function drawBody() {
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
function drawMan() {
  head();
  drawBody();
  leftLeg();
  rightLeg();
  leftHand();
  rightHand();
}
drawMan();
