/* export default class StartLevel {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  update() {
    // update the position of your particle
  }

  display() {}
}*/
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(98, 98, 98);

  //center of object
  let x = 300;
  let y = 300;

  //edit body color
  let bodyColorRed = 0;
  let bodyColorGreen = 141;
  let bodyColorBlue = 28;

  //edit shadow color
  let shadowColorRed = 0;
  let shadowColorGreen = 96;
  let shadowColorBlue = 13;

  //edit scale
  let selfieScale = 0.3;

  //text, background
  push();
  noStroke();
  fill(71, 71, 71);
  rect(100, 100, 600, 150, 25);
  rect(100, 300, 200, 200, 25);
  rect(325, 300, 150, 200, 25);
  pop();

  push();
  fill(255, 0, 0);
  rect(340, 320, 120, 25, 7.5);
  pop();

  push();
  fill(0, 0, 255);
  rect(340, 355, 120, 25, 7.5);
  pop();

  push();
  fill(255, 255, 0);
  rect(340, 390, 120, 25, 7.5);
  pop();

  push();
  fill(10, 255, 0);
  rect(340, 425, 120, 25, 7.5);
  pop();

  push();
  fill(100, 0, 255);
  rect(340, 460, 120, 25, 7.5);
  pop();

  //canvas background
  push();
  translate(100, 295);
  scale(selfieScale);
  strokeWeight(5);

  //card

  //body
  fill(bodyColorRed, bodyColorGreen, bodyColorBlue);
  rect(x - 150, y, 300, 250);
  ellipse(x, y, 300, 250);

  push();
  noStroke();

  //rectangle which hides a stroke element
  rect(155, y, 289, 230);

  //shadow on body
  beginShape();
  fill(shadowColorRed, shadowColorGreen, shadowColorBlue);
  vertex(153, 490);
  vertex(153, 548);
  vertex(448, 548);
  vertex(448, 300);
  bezierVertex(448, 300, 350, 500, 153, 490);
  endShape();

  pop();

  //backpack
  fill(bodyColorRed, bodyColorGreen, bodyColorBlue);
  rect(450, 375, 100, 175, 0, 50, 0);

  //shadow on backpack
  push();

  noStroke();
  fill(shadowColorRed, shadowColorGreen, shadowColorBlue);
  rect(452.5, 407.5, 95, 140, 0, 50, 0);

  pop();

  //glasses
  fill(159, 202, 229);
  rect(100, 280, 230, 150, 100);

  push();
  noStroke();
  //white dot on the glasses
  fill(244, 244, 255);
  ellipse(200, 320, 110, 40);

  pop();
  pop();

  textSize(40);
  textAlign(CENTER);
  text("Welcome to the master game", 800 / 2, 400 / 2);
}
