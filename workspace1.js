// function setup() {
//   createCanvas(800, 800);
//   background(255, 255, 255);
// }

let enemyX = 200;
let enemyY = 200;

background(255, 255, 255);

//player model
function player(playerX, playerY, rotation) {
  push();
  translate(playerX, playerY);
  rotate(rotation);
  rotate(1.56);
  push();

  strokeWeight(2);
  fill(255, 255, 0);

  //backpack
  rect();
  rect(-11, 5.5, 22, 9, 3);

  //body
  rect(-15, -7.5, 30, 15, 10);

  //visor
  fill(0, 190, 255);
  rect(-10, -11, 20, 10, 15);
  pop();

  // line in visor
  push();
  beginShape();
  strokeWeight(1.5);
  stroke(255, 255, 255);
  noFill();
  vertex(-4.5, -4);
  bezierVertex(0 - 7, 0 - 3, 0 + 13, 0 - 5, 0 + 17, 0);

  endShape();
  pop();
  pop();
}

function enemy() {
  //vision cone
  push();
  fill(255, 255, 120);
  strokeWeight(0);
  beginShape();
  vertex(205, 205);
  vertex(195, 170);
  bezierVertex(195, 150, 235, 150, 235, 170);
  vertex(225, 205);
  endShape();
  pop();
  //enemy
  push();
  strokeWeight(2);
  fill(255, 0, 0);

  //backpack
  rect();
  rect(enemyX + 4, enemyY + 13, 22, 9, 3);

  //body
  rect(enemyX, enemyY, 30, 15, 10);

  //visor
  fill(0, 190, 255);
  rect(enemyX + 5, enemyY - 4, 20, 10, 15);
  pop();

  // line in visor
  push();
  beginShape();
  strokeWeight(1.5);
  stroke(255, 255, 255);
  noFill();
  vertex(enemyX + 9, enemyY + 2);
  bezierVertex(
    enemyX + 7,
    enemyY + 3,
    enemyX + 13,
    enemyY - 5,
    enemyX + 17,
    enemyY
  );

  endShape();
  pop();
}

let playerX = 50;
let playerY = 100;
let rotation = 0;
let playerSpeed = 0;

function draw() {
  background(211, 211, 211);
  player(playerX, playerY, rotation);

  playerX += Math.cos(rotation) * playerSpeed;
  playerY += Math.sin(rotation) * playerSpeed;

  if (keyIsDown(87)) {
    playerSpeed = 3;
  } else if (keyIsDown(83)) {
    playerSpeed = -3;
  } else {
    playerSpeed = 0;
  }
  if (keyIsDown(65)) {
    rotation = rotation - 0.05;
  } else if (keyIsDown(68)) {
    rotation = rotation + 0.05;
  }

  enemy(enemyX, enemyY);
}
