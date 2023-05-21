export default class Player {
  constructor(playerX, playerY, playerRotation, playerSpeed) {
    this.playerX = playerX;
    this.playerY = playerY;
    this.playerRotation = playerRotation;
    this.playerSpeed = playerSpeed;
  }

  display() {
    push();
    translate(this.playerX, this.playerY);
    rotate(PI / 2); // Adjust initial rotation

    strokeWeight(2);
    fill(255, 255, 0);

    // Adjust rotation for sprite orientation based on movement angle
    if (this.playerRotation === 0) {
      // Right
      // No additional rotation needed
    } else if (this.playerRotation === PI) {
      // Left
      rotate(PI);
    } else if (this.playerRotation === PI / 2) {
      // Down
      rotate(PI / 2);
    } else if (this.playerRotation === -PI / 2) {
      // Up
      rotate(-PI / 2);
    }

    // backpack
    rect(-11, 5.5, 22, 9, 3);

    // body
    rect(-15, -7.5, 30, 15, 10);

    // visor
    fill(0, 190, 255);
    rect(-10, -11, 20, 10, 15);

    pop();
  }

  move(walls, dx, dy) {
    const nextX = this.playerX + dx;
    const nextY = this.playerY + dy;

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
