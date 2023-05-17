// //loads the font
// function setup() {
//   loadFont("assets/DS_DIGI.TTF", drawText);
// }
background(255, 205, 115);
//interface
strokeWeight(3);
//interface background
fill(128, 128, 128);
rect(0, 700, 800, 100);
fill(105, 105, 105);
//left rectangle
rect(0, 712.5, 250, 75, 0, 10, 10, 0);

//time rectangle
rect(325, 712.5, 150, 75, 10);
//counter
let counterColorR = 0;
let counterColorG = 255;
let counterColorB = 0;

let counterFont;

//innerplate
push();
fill(counterColorR, counterColorG, counterColorB);
rect(350, 725, 100, 50, 10);
pop();

//code inspired by p5js website
push();
fill(0, 0, 0);
textFont("DS-Digital");
textSize(40);
textAlign(CENTER);
text(0 + 2 + ":" + 0 + 1, 400, 762.5);
pop();

//right rectangle
rect(800 - 250, 712.5, 250, 75, 10, 0, 0, 10);

let screwPositionX = 235;
let screwPositionY = 725;
let screwStrokeWeight = 2;
let screwSize = 10;
//screw
function screw(screwPositionX, screwPositionY, screwStrokeWeight, screwSize) {
  strokeWeight(screwStrokeWeight);
  fill(128, 128, 128);
  ellipse(screwPositionX, screwPositionY, screwSize);
  strokeWeight(screwStrokeWeight);
  line(screwPositionX - 2, screwPositionY, screwPositionX + 2, screwPositionY);
  line(screwPositionX, screwPositionY - 2, screwPositionX, screwPositionY + 2);
}

//left plate
screw(235, 725, 2, 10);
screw(235, 775, 2, 10);
screw(10, 725, 2, 10);
screw(10, 775, 2, 10);

//counter screws
screw(338, 725, 2, 10);
screw(338, 775, 2, 10);
screw(462, 725, 2, 10);
screw(462, 775, 2, 10);

//right plate
screw(565, 725, 2, 10);
screw(565, 775, 2, 10);
screw(790, 725, 2, 10);
screw(790, 775, 2, 10);

function achivementShadow() {
  noStroke();
  fill(55, 55, 55);
  //first achivement
  ellipse(617.5 - 5, 750, 50);
  //second achivement
  ellipse(677.5, 750, 50);
  //third achivement
  ellipse(737.5 + 5, 750, 50);
}
achivementShadow();

function keyCardShadow() {
  noStroke();
  fill(55, 55, 55);
  //first keycard
  rect(25, 731, 55, 37.5, 5);
  //second keycard
  rect(95, 731, 55, 37.5, 5);
  //third keycard
  rect(165, 731, 55, 37.5, 5);
}
keyCardShadow();
let keyCardColorR = 100;
let keyCardColorG = 100;
let keyCardColorB = 200;

let playerColorR = 100;
let playerColorG = 25;
let playerColorB = 105;
let keyCardX = 0;
let keyCardY = 0;

function keyCard(keyCardX, keyCardY) {
  strokeWeight(2);
  stroke(0, 0, 0);
  fill(30, 30, 30);
  scale(2);
  rect(keyCardX - 5, keyCardY + 1, 55, 37.5, 5);
  //card color
  push();
  noStroke();
  fill(keyCardColorR, keyCardColorG, keyCardColorB);
  rect(keyCardX + 32, keyCardY + 1.25, 12, 37);
  pop();
  //picture on the keycard
  //frame
  fill(255, 255, 255);
  strokeWeight(1);
  stroke(0, 0, 0);
  rect(keyCardX, keyCardY + 10, 15, 20, 1);
  //character
  beginShape();
  fill(playerColorR, playerColorG, playerColorB);
  strokeWeight(0.5);
  stroke(0, 0, 0);
  vertex(keyCardX + 14.75, keyCardY + 18);
  bezierVertex(
    keyCardX + 14.75,
    keyCardY + 18,
    keyCardX + 10,
    keyCardY + 10,
    keyCardX + 6,
    keyCardY + 19
  );
  vertex(keyCardX + 5, keyCardY + 29.75);
  vertex(keyCardX + 14.75, keyCardY + 29.75);
  vertex(keyCardX + 14.75, keyCardY + 18);
  endShape();
  //vicer
  fill(0, 150, 200);
  ellipse(keyCardX + 8, keyCardY + 20, 10 - 3, 7 - 3);
}
keyCard(40, 40);
keyCard(100, 730);
keyCard(170, 730);

//coin

//mur
