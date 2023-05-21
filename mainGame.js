import Wall from "./objects/wallclass";
import Player from "./objects/playerclass";
import Enemy from "./objects/enemyclass";
import Interface from "./objects/interface";
import KeyCard from "./objects/keyCard";

function setup() {
  createCanvas(800, 800);
}
const playerSpeed = 4;

function draw() {
  background(15, 61, 15);

  // Check for key inputs and set the movement direction
  //dx = direction x and dy= direction y
  let dx = 0;
  let dy = 0;
  if (keyIsDown(68)) {
    // 'd' key
    dx = playerSpeed;
  } else if (keyIsDown(65)) {
    // 'a' key
    dx = -playerSpeed;
  } else if (keyIsDown(87)) {
    // 'w' key
    dy = -playerSpeed;
  } else if (keyIsDown(83)) {
    // 's' key
    dy = playerSpeed;
  }

  // Update the player's position
  player.move(
    [
      Wallone,
      Walltwo,
      Wallthree,
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
      Wallfourteen,
      Wallfifteen,
      Wallsixteen,
    ],
    dx,
    dy
  );

  // Display the player
  player.display();

  // Update the player's position and rotation
  player.updateRotation(dx, dy);

  // Display the player
  player.display();
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
let player = new Player(50, 100, 0, playerSpeed);

let enemy1 = new Enemy(110, 140, 6);
let enemy2 = new Enemy(150, 400, 3.5);
let enemy3 = new Enemy(400, 70, 3);
let enemy4 = new Enemy(520, 490, 3);
