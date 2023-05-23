let playerSpeed = 4;
let playerX = 100;
let playerY = 100;
let playerRotation = 0;

function player(playerX, playerY) {
  push();
  translate(playerX, playerY);
  rotate(playerRotation + HALF_PI); // Adjust rotation

  strokeWeight(2);
  fill(255, 255, 0);

  // backpack
  rect(-11, 5.5, 22, 9, 3);

  // body
  rect(-15, -7.5, 30, 15, 10);

  // visor
  fill(0, 190, 255);
  rect(-10, -11, 20, 10, 15);

  pop();
}

function enemy(enemyX, enemyY, enemyRotation) {
  let rotationSpeed = 0.02;
  let switchTimeout = 0;
  console.log("Enemy X Position:", enemyX);
  push();
  translate(enemyX, enemyY);
  rotate(enemyRotation);

  // vision cone
  fill(255, 255, 120);
  strokeWeight(0);
  beginShape();
  vertex(-10, -5);
  vertex(-20, -40);
  bezierVertex(-20, -60, 20, -60, 20, -40);
  vertex(10, -5);
  endShape();

  // enemy
  strokeWeight(2);
  fill(255, 0, 0);

  // backpack
  rect(-11, 5.5, 22, 9, 3);

  // body
  rect(-15, -7.5, 30, 15, 10);

  // visor
  fill(0, 190, 255);
  rect(-10, -11, 20, 10, 15);

  pop();

  const switchInterval = 4500; // Interval for switching rotation speed (in milliseconds)

  if (!switchTimeout) {
    // If switchTimeout doesn't exist, set it to a new timeout
    switchTimeout = setTimeout(() => {
      // Change the rotation speed direction
      rotationSpeed *= -1;
      // Reset switchTimeout and update the rotation
      switchTimeout = null;
    }, switchInterval);
  }

  // Update the rotation based on the current speed
  enemyRotation += rotationSpeed;
}
function draw() {
  clear();
  player(playerX, playerY);
  enemy(300, 300, 1);
  if (keyIsDown(68)) {
    // 'd' key
    playerRotation = 0;
    playerX += playerSpeed;
  } else if (keyIsDown(65)) {
    // 'a' key
    playerRotation = PI;
    playerX -= playerSpeed;
  } else if (keyIsDown(87)) {
    // 'w' key
    playerRotation = -HALF_PI;
    playerY -= playerSpeed;
  } else if (keyIsDown(83)) {
    // 's' key
    playerRotation = HALF_PI;
    playerY += playerSpeed;
  }
}
