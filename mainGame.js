import Wall from "./objects/wallclass";
import Player from "./objects/playerclass";
import Enemy from "./objects/enemyclass";
import Interface from "./objects/interface";
import KeyCard from "./objects/keyCard";
import FirstLevel from "./objects/levels/firstLevel";

let state = "levelOne";
const playerSpeed = 4;

const keyCardBooleans = [true, true, false]; // Set the initial values to true
// Define an array to store the key card instances
const keyCards = [
  keyCardInstanceFirst,
  keyCardInstanceSecond,
  keyCardInstanceThird,
];

function setup() {
  createCanvas(800, 800);
}

function draw() {
  states();
  //KEYCARDS
  // Define an array to store the boolean values for each key card
  // Loop through the key card instances
  for (let i = 0; i < keyCards.length; i++) {
    // Check the corresponding boolean value for the current key card
    if (keyCardBooleans[i]) {
      // If the boolean value is true, display the key card
      keyCards[i].display();
    }
  }
}

function states() {
  if (state === "levelOne") {
    levelOne.display();
    levelOne.move();
  } else if (state === "levelTwo") {
    levelTwo();
  } else if (state === "levelThree") {
    levelThree();
  } else if (state === "winRoom") {
    winRoom();
  }
}
function levelTwo() {
  //level 2
  background(135, 142, 136);

  player2.display();

  interfaceInstance.display();
  enemy5.display();
  enemy5.update();
  enemy6.display();
  enemy6.update();
  enemy7.display();
  enemy7.update();
  enemy8.display();
  enemy8.update();
  enemy9.display();
  enemy9.update();

  Wall17.display();
  Wall18.display();
  Wall19.display();
  Wall20.display();
  Wall21.display();
  Wall22.display();
  Wall23.display();
  Wall24.display();
  Wall25.display();
  Wall26.display();
  Wall27.display();
  Wall28.display();
  Wall29.display();
  Wall30.display();
  Wall31.display();
  Wall32.display();
  Wall33.display();
  Wall34.display();
  Wall35.display();
  Wall36.display();
  Wall37.display();
  Wall38.display();
  Wall39.display();
  Wall40.display();
  Wall41.display();
  Wall42.display();
  Wall43.display();
  Wall44.display();
}
function levelThree() {
  //level 3
  background(15, 61, 15);
  interfaceInstance.display();
  enemy10.display();
  enemy10.update();
  enemy11.display();
  enemy11.update();
  enemy12.display();
  enemy12.update();
  enemy13.display();
  enemy13.update();
  enemy14.display();
  enemy14.update();
  enemy15.display();
  enemy15.update();
  enemy16.display();
  enemy16.update();
  enemy17.display();
  enemy17.update();
  enemy18.display();
  enemy18.update();

  Wall45.display();
  Wall46.display();
  Wall47.display();
  Wall48.display();
  Wall49.display();
  Wall50.display();
  Wall51.display();
  Wall52.display();
  Wall53.display();
  Wall54.display();
  Wall55.display();
  Wall56.display();
  Wall57.display();
  Wall58.display();
  Wall59.display();
  Wall60.display();
  Wall61.display();
  Wall62.display();
  Wall63.display();
  Wall64.display();
  Wall65.display();
  Wall66.display();
  Wall67.display();
  Wall68.display();
  Wall69.display();
  Wall70.display();
  Wall71.display();
  Wall72.display();
  Wall73.display();
  Wall74.display();
  Wall75.display();
  Wall76.display();
}
function winRoom() {
  background(122, 105, 105);
  interfaceInstance.display();

  // win room level 4
  Wall77.display();
  Wall78.display();
  Wall79.display();
  Wall80.display();
  Wall81.display();
  Wall82.display();
  Wall83.display();
}

// Create player
let player = new Player(50, 100, 0, playerSpeed);
//level 1
let Wallone = new Wall(0, 60, 350, 10);
let Walltwo = new Wall(0, 130, 90, 10);
let Wallthree = new Wall(170, 130, 390, 10);
let Wallfour = new Wall(80, 140, 10, 230);
let Wallfive = new Wall(170, 140, 10, 310);
let Wallsix = new Wall(0, 370, 90, 10);
let Wallseven = new Wall(100, 450, 460, 10);
let Walleight = new Wall(0, 380, 10, 300);
let Wallnine = new Wall(0, 680, 100, 10);
let Wallten = new Wall(100, 540, 10, 150);
let Wallelven = new Wall(110, 540, 360, 10);
let Walltwelve = new Wall(350, 0, 10, 70);
let Wallthirteen = new Wall(420, 0, 10, 70);
let Wallfourteen = new Wall(430, 60, 130, 10);
let Wallfifteen = new Wall(560, 60, 10, 630);
let Wallsixteen = new Wall(460, 550, 10, 140);

let enemy1 = new Enemy(110, 140, 6);
let enemy2 = new Enemy(150, 400, 3.5);
let enemy3 = new Enemy(400, 70, 3);
let enemy4 = new Enemy(520, 490, 3);

// level 2
let player2 = new Player(75, 30, 0, playerSpeed);

let enemy5 = new Enemy(165, 360, 0.1);
let enemy6 = new Enemy(260, 650, 5.5);
let enemy7 = new Enemy(240, 185, 2);
let enemy8 = new Enemy(560, 210, 3.5);
let enemy9 = new Enemy(590, 500, 3.2);

let Wall17 = new Wall(30, 0, 10, 250);
let Wall18 = new Wall(110, 0, 10, 150);
let Wall19 = new Wall(30, 250, 120, 10);
let Wall20 = new Wall(110, 150, 400, 10);
let Wall21 = new Wall(150, 250, 10, 40);
let Wall22 = new Wall(0, 290, 160, 10);
let Wall23 = new Wall(0, 300, 10, 390);
let Wall24 = new Wall(0, 690, 80, 10);
let Wall25 = new Wall(80, 390, 10, 310);
let Wall26 = new Wall(80, 380, 80, 10);
let Wall27 = new Wall(150, 390, 10, 290);
let Wall28 = new Wall(160, 670, 90, 10);
let Wall29 = new Wall(250, 670, 10, 30);
let Wall30 = new Wall(330, 670, 10, 30);
let Wall31 = new Wall(230, 250, 10, 350);
let Wall32 = new Wall(240, 250, 280, 10);
let Wall33 = new Wall(510, 60, 10, 100);
let Wall34 = new Wall(510, 50, 290, 10);
let Wall35 = new Wall(790, 60, 10, 400);
let Wall36 = new Wall(700, 460, 100, 10);
let Wall37 = new Wall(700, 160, 10, 300);
let Wall38 = new Wall(580, 150, 130, 10);
let Wall39 = new Wall(580, 160, 10, 300);
let Wall40 = new Wall(240, 590, 280, 10);
let Wall41 = new Wall(510, 260, 10, 330);
let Wall42 = new Wall(340, 670, 300, 10);
let Wall43 = new Wall(630, 460, 10, 210);
let Wall44 = new Wall(580, 460, 50, 10);

// level 3
let enemy10 = new Enemy(700, 350, 4);
let enemy11 = new Enemy(710, 665, 4);
let enemy12 = new Enemy(485, 485, 4);
let enemy13 = new Enemy(455, 335, 0.5);
let enemy14 = new Enemy(487, 155, 3);
let enemy15 = new Enemy(230, 490, 0);
let enemy16 = new Enemy(265, 190, 4);
let enemy17 = new Enemy(60, 540, 5.5);
let enemy18 = new Enemy(120, 635, 3);

let Wall45 = new Wall(650, 0, 10, 300);
let Wall46 = new Wall(730, 0, 10, 350);
let Wall47 = new Wall(730, 350, 70, 10);
let Wall48 = new Wall(730, 430, 70, 10);
let Wall49 = new Wall(730, 440, 10, 260);
let Wall50 = new Wall(430, 690, 300, 10);
let Wall51 = new Wall(650, 370, 10, 260);
let Wall52 = new Wall(510, 620, 140, 10);
let Wall53 = new Wall(510, 370, 140, 10);
let Wall54 = new Wall(510, 380, 10, 240);
let Wall55 = new Wall(510, 290, 140, 10);
let Wall56 = new Wall(420, 520, 10, 180);
let Wall57 = new Wall(510, 130, 10, 160);
let Wall58 = new Wall(420, 210, 10, 240);
let Wall59 = new Wall(20, 120, 500, 10);
let Wall60 = new Wall(280, 200, 150, 10);
let Wall61 = new Wall(280, 210, 10, 240);
let Wall62 = new Wall(290, 440, 130, 10);
let Wall63 = new Wall(290, 520, 130, 10);
let Wall64 = new Wall(280, 520, 10, 180);
let Wall65 = new Wall(200, 200, 10, 430);
let Wall66 = new Wall(20, 130, 10, 450);
let Wall67 = new Wall(120, 200, 90, 10);
let Wall68 = new Wall(110, 200, 10, 300);
let Wall69 = new Wall(120, 490, 60, 10);
let Wall70 = new Wall(30, 570, 150, 10);
let Wall71 = new Wall(170, 500, 10, 70);
let Wall72 = new Wall(30, 690, 250, 10);
let Wall73 = new Wall(20, 610, 10, 90);
let Wall74 = new Wall(30, 610, 110, 10);
let Wall75 = new Wall(140, 610, 10, 20);
let Wall76 = new Wall(140, 630, 70, 10);

//win room (level 4)
let Wall77 = new Wall(0, 350, 300, 10);
let Wall78 = new Wall(0, 430, 300, 10);
let Wall79 = new Wall(300, 260, 10, 100);
let Wall80 = new Wall(310, 260, 230, 10);
let Wall81 = new Wall(540, 260, 10, 270);
let Wall82 = new Wall(300, 430, 10, 100);
let Wall83 = new Wall(310, 520, 230, 10);
