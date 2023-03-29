// //loads the font
// function setup() {
//   loadFont("assets/DS_DIGI.TTF", drawText);
// }

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
text("32:22", 355, 762.5);
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

let achivementElement = [
  "firstAchivement",
  "secondAchivement",
  "thirdAchivement",
];
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

let keyCardElement = ["firstKeyCard", "secondKeyCard", "thirdKeyCard"];
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

function keyCard() {
  fill(250, 250, 250);
  scale(4);
  rect(95, 101, 55, 37.5, 5);
  //picture on the keycard
  //frame
  noFill();
  strokeWeight(1);
  stroke(0, 0, 0);
  rect(100, 110, 15, 20, 1);
  //character
  strokeWeight(0.5);
  beginShape();
  endShape();
  //vicer
  fill(0, 150, 200);
  ellipse(108, 119, 10 - 3, 7 - 3);
}
keyCard();
