//objects imported
import Wall from "./objects/wallclass";
import Player from "./objects/playerclass";
import Enemy from "./objects/enemyclass";
import Interface from "./objects/interface";
import KeyCard from "./objects/keyCard";
import Floor from "./objects/floorClass";

//levels imported
import FirstLevel from "./objects/levels/firstLevel";
import SecondLevel from "./objects/levels/secondLevel";
import ThirdLevel from "./objects/levels/thirdLevel";
import FinalLevel from "./objects/levels/finalLevel";
function setup() {
  createCanvas(800, 800);
}

let state = "levelTwo";
const playerSpeed = 4;

let keyCardBooleans = [false, false, false]; // Set the initial values to true
// Define an array to store the key card instances
const keyCards = [
  keyCardInstanceFirst,
  keyCardInstanceSecond,
  keyCardInstanceThird,
];

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
  // Check if the player is in levelOne and at the specified position to pick up the key card
  if (state === "levelOne" && player.playerX < 75 && player.playerY > 640) {
    keyCardBooleans[0] = true;
    keyCardlevelOne.removeDisplay();
  }
  if (
    (keyCardInstanceFirst =
      true &&
      keyCardBooleans[0] === true &&
      player.playerX > 470 &&
      player.playerY > 700)
  ) {
    state = "levelTwo";
  }

  if (player2.playerX > 730 && player2.playerY > 420) {
    keyCardBooleans[1] = true;
    keyCardlevelTwo.removeDisplay();
  }
  if (
    (keyCardInstanceSecond =
      true &&
      keyCardBooleans[1] === true &&
      player2.playerX > 260 &&
      player2.playerX < 330 &&
      player2.playerY > 700)
  ) {
    state = "levelThree";
  }
  if (
    player3.playerX > 120 &&
    player3.playerX < 140 &&
    player3.playerY > 530 &&
    player3.playerY < 550
  ) {
    keyCardBooleans[2] = true;
    keyCardlevelThree.removeDisplay();
  }
  if (
    (keyCardInstanceThird =
      true && keyCardBooleans[2] === true && player3.playerX > 800)
  ) {
    state = "levelFinal";
  }
}

function states() {
  if (state === "levelOne") {
    levelOne.display();
    levelOne.move();
  } else if (state === "levelTwo") {
    levelTwo.display();
    levelTwo.move();
  } else if (state === "levelThree") {
    levelThree.display();
    levelThree.move();
  } else if (state === "levelFinal") {
    levelFinal.display();
    levelFinal.move();
  }
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
let Wallseven = new Wall(100, 450, 450, 10);
let Walleight = new Wall(0, 380, 10, 300);
let Wallnine = new Wall(0, 680, 100, 10);
let Wallten = new Wall(100, 540, 10, 150);
let Wallelven = new Wall(110, 540, 360, 10);
let Walltwelve = new Wall(350, 0, 10, 70);
let Wallthirteen = new Wall(420, 0, 10, 70);
let Wallfourteen = new Wall(430, 60, 130, 10);
let Wallfifteen = new Wall(560, 60, 10, 80);
let Wallsixteen = new Wall(460, 550, 10, 190);
let Wall84 = new Wall(360, 0, 60, 10);
let Wall85 = new Wall(540, 450, 10, 290);
let Wall86 = new Wall(460, 740, 90, 10);

let Floor1 = new Floor(0, 70, 560, 60);
let Floor2 = new Floor(360, 10, 60, 60);
let Floor3 = new Floor(90, 130, 80, 319);
let Floor4 = new Floor(10, 380, 90, 300);
let Floor5 = new Floor(100, 460, 450, 80);
let Floor6 = new Floor(470, 540, 80, 200);
let Floor7 = new Floor(1410, 140, 130, 70);

let enemy1 = new Enemy(110, 140, 6);
let enemy2 = new Enemy(150, 400, 3.5);
let enemy3 = new Enemy(400, 70, 3);
let enemy4 = new Enemy(520, 490, 3);

//keycards the player "picks up" on the map
let keyCardlevelOne = new KeyCard(30, 630);
let keyCardlevelTwo = new KeyCard(722.5, 212.75);
let keyCardlevelThree = new KeyCard(117, 520);

// level 2
let player2 = new Player(75, 30, 0, playerSpeed);

let enemy5 = new Enemy(165, 360, 6.5);
let enemy6 = new Enemy(275, 665, -1);
let enemy7 = new Enemy(240, 190, 2);
let enemy8 = new Enemy(560, 210.5, -3.5);
let enemy9 = new Enemy(585, 490, -3.2);
let enemy21 = new Enemy(535, 610, 7.2);

let Wall17 = new Wall(30, 0, 10, 230);
let Wall18 = new Wall(110, 0, 10, 170);
let Wall19 = new Wall(30, 230, 120, 10);
let Wall20 = new Wall(110, 162, 400, 10);
let Wall21 = new Wall(150, 230, 10, 70);
let Wall22 = new Wall(0, 300, 160, 10);
let Wall23 = new Wall(0, 310, 10, 140);
let Wall24 = new Wall(0, 450, 80, 10);
let Wall25 = new Wall(80, 390, 10, 70);
let Wall26 = new Wall(80, 380, 80, 10);
let Wall27 = new Wall(150, 390, 10, 290);
let Wall28 = new Wall(160, 670, 90, 10);
let Wall29 = new Wall(250, 670, 10, 30);
let Wall30 = new Wall(330, 670, 10, 30);
let Wall31 = new Wall(230, 250, 10, 360);
let Wall32 = new Wall(240, 250, 280, 10);
let Wall33 = new Wall(510, 80, 10, 92);
let Wall34 = new Wall(510, 80, 280, 10);
let Wall35 = new Wall(780, 80, 10, 190);
let Wall36 = new Wall(700, 260, 90, 10);
let Wall37 = new Wall(700, 160, 10, 100);
let Wall38 = new Wall(580, 150, 130, 10);
let Wall39 = new Wall(580, 160, 10, 300);
let Wall40 = new Wall(240, 600, 280, 10);
let Wall41 = new Wall(510, 260, 10, 340);
let Wall42 = new Wall(340, 670, 300, 10);
let Wall43 = new Wall(630, 460, 10, 210);
let Wall44 = new Wall(580, 460, 50, 10);
let Wall90 = new Wall(30, -5, 90, 10);

let Floor10 = new Floor(40, 0, 70, 240);
let Floor11 = new Floor(150, 170, 370, 80);
let Floor12 = new Floor(160, 250, 70, 420);
let Floor13 = new Floor(10, 310, 150, 70);
let Floor14 = new Floor(10, 380, 70, 70);
let Floor15 = new Floor(230, 610, 400, 60);
let Floor16 = new Floor(520, 150, 70, 320);
let Floor17 = new Floor(520, 470, 110, 140);
let Floor18 = new Floor(520, 80, 190, 70);
let Floor19 = new Floor(80, 380, 80, 10);
let Floor20 = new Floor(710, 90, 70, 170);
let Floor21 = new Floor(110, 170, 40, 70);
let Floor22 = new Floor(250, 670, 80, 50);

// level 3
let player3 = new Player(695, 30, 0, playerSpeed);

let enemy10 = new Enemy(700, 350, 4);
let enemy11 = new Enemy(710, 665, 4);
let enemy12 = new Enemy(485, 485, 4);
let enemy13 = new Enemy(455, 335, 0.5);
let enemy14 = new Enemy(487, 155, 3);
let enemy15 = new Enemy(230, 490, 0);
let enemy16 = new Enemy(265, 190, 4);
let enemy17 = new Enemy(55, 540, 5.5);
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
let player4 = new Player(20, 400, 0, playerSpeed);

let Wall77 = new Wall(0, 350, 300, 10);
let Wall78 = new Wall(0, 430, 300, 10);
let Wall79 = new Wall(300, 260, 10, 100);
let Wall80 = new Wall(310, 260, 230, 10);
let Wall81 = new Wall(540, 260, 10, 270);
let Wall82 = new Wall(300, 430, 10, 100);
let Wall83 = new Wall(310, 520, 230, 10);
