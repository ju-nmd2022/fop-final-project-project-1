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
  player.move([Wallone, Walltwo, Wallthree]);

  // Display walls
  Wallone.display();
  Walltwo.display();
  Wallthree.display();

  enemy1.display();
  enemy1.update();

  enemy2.display();
  enemy2.update();

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
let Wallone = new Wall(200, 0, 10, 500);
let Walltwo = new Wall(200, 500, 300, 10);
let Wallthree = new Wall(100, 200, 10, 200);

// Create player instance
let player = new Player(50, 100, 0);
