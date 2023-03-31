// function setup() {
//   createCanvas(800, 800);
//   background(255, 255, 255);
// }

let playerX = 100;
let playerY = 100;

let enemyX = 200;
let enemyY = 200;

background(255, 255, 255);

//player model
function player() {
  push();
  strokeWeight(2);
  fill(255, 255, 0);

  //backpack
  rect();
  rect(playerX + 4, playerY + 13, 22, 9, 3);

  //body
  rect(playerX, playerY, 30, 15, 10);

  //visor
  fill(0, 190, 255);
  rect(playerX + 5, playerY - 4, 20, 10, 15);
  pop();

  // line in visor
  push();
  beginShape();
  strokeWeight(1.5);
  stroke(255, 255, 255);
  noFill();
  vertex(playerX + 9, playerY + 2);
  bezierVertex(
    playerX + 7,
    playerY + 3,
    playerX + 13,
    playerY - 5,
    playerX + 17,
    playerY
  );

  endShape();
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
background(211, 211, 211);
player(playerX, playerY);
enemy(enemyX, enemyY);
