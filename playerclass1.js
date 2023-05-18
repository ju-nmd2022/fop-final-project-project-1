export default class Player {
  constructor(playerX, playerY, playerRotation) {
    this.playerX = playerX;
    this.playerY = playerY;
    this.playerRotation = playerRotation;
    this.playerSpeed = 0;
  }

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

  move(walls) {
    const nextX =
      this.playerX + Math.cos(this.playerRotation) * this.playerSpeed;
    const nextY =
      this.playerY + Math.sin(this.playerRotation) * this.playerSpeed;

    // Check for collision with each wall
    for (let i = 0; i < walls.length; i++) {
      const wall = walls[i];
      const wallBoundingBox = wall.getBoundingBox();

      if (
        nextX > wallBoundingBox.x &&
        nextX < wallBoundingBox.x + wallBoundingBox.width &&
        nextY > wallBoundingBox.y &&
        nextY < wallBoundingBox.y + wallBoundingBox.height
      ) {
        // If collision detected, stop movement
        return;
      }
    }

    // Update player position
    this.playerX = nextX;
    this.playerY = nextY;
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

  getX() {
    return this.playerX;
  }

  // Get the current Y position of the player
  getY() {
    return this.playerY;
  }
}
