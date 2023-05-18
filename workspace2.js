import Wall from "./wallclass1";
import Player from "./playerclass1";

function setup() {
  createCanvas(800, 800);
  width = 100;
}

function draw() {
  // Keyboard input handling
  // W key: move player forward
  if (keyIsDown(87)) {
    player.setSpeed(3);
  }
  // S key: move player backward
  else if (keyIsDown(83)) {
    player.setSpeed(-3);
  }
  // No key pressed: stop player movement
  else {
    player.setSpeed(0);
  }

  // A key: rotate player left
  if (keyIsDown(65)) {
    player.rotateLeft();
  }
  // D key: rotate player right
  else if (keyIsDown(68)) {
    player.rotateRight();
  }

  // Clear the canvas and set background color
  background(15, 61, 15);

  // Display and move the player
  player.display();
  player.move([Wallone, Walltwo, Wallthree]);

  // Display walls
  Wallone.display();
  Walltwo.display();
  Wallthree.display();
}

// Create wall instances
let Wallone = new Wall(200, 0, 10, 500);
let Walltwo = new Wall(200, 500, 300, 10);
let Wallthree = new Wall(100, 200, 10, 200);

// Create player instance
let player = new Player(50, 100, 0);
