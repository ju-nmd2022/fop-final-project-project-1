import Wall from "./objects/wallclass";
import Player from "./objects/playerclass";
import Enemy from "./objects/enemyclass";
import Interface from "./objects/interface";
import KeyCard from "./objects/keyCard";

function setup() {
  createCanvas(800, 800);
  width = 100;
}

function draw() {
  //W key
  if (keyIsDown(87)) {
    player.setSpeed(3);
    //S key
  } else if (keyIsDown(83)) {
    player.setSpeed(-3);
  } else {
    player.setSpeed(0);
  }
  //A key
  if (keyIsDown(65)) {
    player.rotateLeft();
    //D key
  } else if (keyIsDown(68)) {
    player.rotateRight();
  }

  background(15, 61, 15);
  // Display and move the player
  player.display();
  player.move([
    Wallone,
    Walltwo,
    Wallthree,
    Wallfour,
    Wallfour,
    Wallfive,
    Wallsix,
    Wallseven,
    Walleight,
    Wallnine,
    Wallten,
    Wallelven,
    Walltwelve,
    Wallthirteen,
    Wallfifteen,
    Wallsixteen,
  ]);

  // Display walls

  //level 1
  Wallone.display();
  Walltwo.display();
  Wallthree.display();
  Wallfour.display();
  Wallfive.display();
  Wallsix.display();
  Wallseven.display();
  Walleight.display();
  Wallnine.display();
  Wallten.display();
  Wallelven.display();
  Walltwelve.display();
  Wallthirteen.display();
  Wallfourteen.display();
  Wallfifteen.display();
  Wallsixteen.display();

  enemy1.display();
  enemy1.update();

  enemy2.display();
  enemy2.update();

  enemy3.display();
  enemy3.update();

  enemy4.display();
  enemy4.update();

  interfaceInstance.display();

  //KEYCARDS
  // Define an array to store the boolean values for each key card
  const keyCardBooleans = [true, true, false]; // Set the initial values to true
  // Define an array to store the key card instances
  const keyCards = [
    keyCardInstanceFirst,
    keyCardInstanceSecond,
    keyCardInstanceThird,
  ];
  // Loop through the key card instances
  for (let i = 0; i < keyCards.length; i++) {
    // Check the corresponding boolean value for the current key card
    if (keyCardBooleans[i]) {
      // If the boolean value is true, display the key card
      keyCards[i].display();
    }
  }
}

// Create wall instances

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

// Create player instance
let player = new Player(50, 100, 0);
