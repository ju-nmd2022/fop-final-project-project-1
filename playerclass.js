export default class Player {
  constructor(playerX, playerY, playerRotation) {
    this.playerX = playerX;
    this.playerY = playerY;
    this.playerRotation = playerRotation;
    this.playerSpeed = 0;
  }

  // drawing of the player
  display() {
    push();
    translate(this.playerX, this.playerY);
    rotate(this.playerRotation);
    rotate(1.56);
    push();

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
    pop();
  }
  move() {
    this.playerX += Math.cos(this.playerRotation) * this.playerSpeed;
    this.playerY += Math.sin(this.playerRotation) * this.playerSpeed;
  }

  setSpeed(speed) {
    this.playerSpeed = speed;
  }

  rotateLeft() {
    this.playerRotation -= 0.05;
  }

  rotateRight() {
    this.playerRotation += 0.05;
  }
}

let player = new Player(50, 100, 0);

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

  player.display();
  player.move();
}
