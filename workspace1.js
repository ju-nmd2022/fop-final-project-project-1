// function setup() {
//   createCanvas(800, 800);
//   background(255, 255, 255);
// }

let playerX = 100;
let playerY = 100;

background(255, 255, 255);

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

player(playerX, playerY);
