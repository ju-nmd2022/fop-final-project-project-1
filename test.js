//movement test

let playerX = 200;
let playerY = 200;
const playerSpeed = 5;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  let dx = 0; // Movement in the x direction
  let dy = 0; // Movement in the y direction

  // Check for key inputs and set the movement direction
  if (keyIsDown(68)) {
    // 'd' key
    dx = playerSpeed;
    dy = 0;
  } else if (keyIsDown(65)) {
    // 'a' key
    dx = -playerSpeed;
    dy = 0;
  } else if (keyIsDown(87)) {
    // 'w' key
    dx = 0;
    dy = -playerSpeed;
  } else if (keyIsDown(83)) {
    // 's' key

    dx = 0;
    dy = playerSpeed;
  }

  // Update the player's position
  playerX += dx;
  playerY += dy;

  // Draw the player
  rect(playerX, playerY, 50, 50);
}
