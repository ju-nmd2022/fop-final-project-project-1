// function setup() {
//   createCanvas(800, 800);
//   background(255, 255, 255);
// }

import Enemy from "./objects/enemyclass";

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
let playerrotation = 0;
let playerSpeed = 0;

function draw() {
  background(211, 211, 211);
  player(playerX, playerY, playerrotation);

  playerX += Math.cos(playerrotation) * playerSpeed;
  playerY += Math.sin(playerrotation) * playerSpeed;

  if (keyIsDown(87)) {
    playerSpeed = 3;
  } else if (keyIsDown(83)) {
    playerSpeed = -3;
  } else {
    playerSpeed = 0;
  }
  if (keyIsDown(65)) {
    playerrotation = playerrotation - 0.05;
  } else if (keyIsDown(68)) {
    playerrotation = playerrotation + 0.05;
  }
  let EnemyOne = new Enemy(300, 300, 1);

  enemy(enemyX, enemyY);
  EnemyOne.draw();
}

//gammal workspace 2 med bana 1
// import Wall from "./wallclass1";
// import Player from "./playerclass1";
// import Interface from "./objects/interface";
// import KeyCard from "./objects/keyCard";

// function setup() {
//   createCanvas(800, 800);
//   width = 100;
// }
// class Enemy {
//   constructor(enemyX, enemyY, enemyRotation) {
//     this.enemyX = enemyX;
//     this.enemyY = enemyY;
//     this.enemyRotation = enemyRotation;
//     this.rotationSpeed = 0.02;
//     this.lastSwitchTime = 0;
//   }

//   update() {
//     // Check if it's been 3 seconds since the last switch
//     if (millis() - this.lastSwitchTime > 4500) {
//       // Change the rotation speed direction
//       this.rotationSpeed *= -1;
//       // Update the last switch time to now
//       this.lastSwitchTime = millis();
//     }
//     // Update the rotation based on the current speed
//     this.enemyRotation += this.rotationSpeed;
//   }

//   display() {
//     push();
//     translate(this.enemyX, this.enemyY);
//     rotate(this.enemyRotation);

//     // vision cone
//     fill(255, 255, 120);
//     strokeWeight(0);
//     beginShape();
//     vertex(-10, -5);
//     vertex(-20, -40);
//     bezierVertex(-20, -60, 20, -60, 20, -40);
//     vertex(10, -5);
//     endShape();

//     // enemy
//     strokeWeight(2);
//     fill(255, 0, 0);

//     // backpack
//     rect(-11, 5.5, 22, 9, 3);

//     // body
//     rect(-15, -7.5, 30, 15, 10);

//     // visor
//     fill(0, 190, 255);
//     rect(-10, -11, 20, 10, 15);

//     pop();
//   }
// }
// //level 1 enemies
// let enemy1 = new Enemy(110, 140, 6);
// let enemy2 = new Enemy(150, 400, 3.5);
// let enemy3 = new Enemy(400, 70, 3);
// let enemy4 = new Enemy(520, 490, 3);

// function draw() {
//   // Keyboard input handling
//   // W key: move player forward
//   if (keyIsDown(87)) {
//     player.setSpeed(3);
//   }
//   // S key: move player backward
//   else if (keyIsDown(83)) {
//     player.setSpeed(-3);
//   }
//   // No key pressed: stop player movement
//   else {
//     player.setSpeed(0);
//   }

//   // A key: rotate player left
//   if (keyIsDown(65)) {
//     player.rotateLeft();
//   }
//   // D key: rotate player right
//   else if (keyIsDown(68)) {
//     player.rotateRight();
//   }

//   // Clear the canvas and set background color
//   background(15, 61, 15);

//   // Display and move the player
//   player.display();
//   player.move([
//     Wallone,
//     Walltwo,
//     Wallthree,
//     Wallfour,
//     Wallfour,
//     Wallfive,
//     Wallsix,
//     Wallseven,
//     Walleight,
//     Wallnine,
//     Wallten,
//     Wallelven,
//     Walltwelve,
//     Wallthirteen,
//     Wallfifteen,
//     Wallsixteen,
//   ]);

//   // Display walls
//   Wallone.display();
//   Walltwo.display();
//   Wallthree.display();
//   Wallfour.display();
//   Wallfive.display();
//   Wallsix.display();
//   Wallseven.display();
//   Walleight.display();
//   Wallnine.display();
//   Wallten.display();
//   Wallelven.display();
//   Walltwelve.display();
//   Wallthirteen.display();
//   Wallfourteen.display();
//   Wallfifteen.display();
//   Wallsixteen.display();

//   interfaceInstance.display();

//   //  level 1
//   enemy1.display();
//   enemy1.update();

//   enemy2.display();
//   enemy2.update();

//   enemy3.display();
//   enemy3.update();

//   enemy4.display();
//   enemy4.update();

//   //KEYCARDS
//   // Define an array to store the boolean values for each key card
//   const keyCardBooleans = [true, true, false]; // Set the initial values to true
//   // Define an array to store the key card instances
//   const keyCards = [
//     keyCardInstanceFirst,
//     keyCardInstanceSecond,
//     keyCardInstanceThird,
//   ];
//   // Loop through the key card instances
//   for (let i = 0; i < keyCards.length; i++) {
//     // Check the corresponding boolean value for the current key card
//     if (keyCardBooleans[i]) {
//       // If the boolean value is true, display the key card
//       keyCards[i].display();
//     }
//   }
// }

// // Create wall instances
// let Wallone = new Wall(0, 60, 350, 10);
// let Walltwo = new Wall(0, 130, 90, 10);
// let Wallthree = new Wall(170, 130, 390, 10);
// let Wallfour = new Wall(80, 140, 10, 230);
// let Wallfive = new Wall(170, 140, 10, 310);
// let Wallsix = new Wall(0, 370, 90, 10);
// let Wallseven = new Wall(100, 450, 460, 10);
// let Walleight = new Wall(0, 380, 10, 300);
// let Wallnine = new Wall(0, 680, 100, 10);
// let Wallten = new Wall(100, 540, 10, 150);
// let Wallelven = new Wall(110, 540, 360, 10);
// let Walltwelve = new Wall(350, 0, 10, 70);
// let Wallthirteen = new Wall(420, 0, 10, 70);
// let Wallfourteen = new Wall(430, 60, 130, 10);
// let Wallfifteen = new Wall(560, 60, 10, 630);
// let Wallsixteen = new Wall(460, 550, 10, 140);
// // Create player instance
// let player = new Player(50, 100, 0);
