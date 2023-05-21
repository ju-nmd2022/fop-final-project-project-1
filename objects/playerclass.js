export default class Player {
  constructor(playerX, playerY, playerRotation, playerSpeed) {
    this.playerX = playerX;
    this.playerY = playerY;
    this.playerRotation = playerRotation;
  }

  display() {
    push();
    translate(this.playerX, this.playerY);
    rotate(this.playerRotation + HALF_PI); // Adjust rotation

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

  move(walls, dx, dy) {
    const nextX = this.playerX + dx;
    const nextY = this.playerY + dy;

    // Check for collision with each wall
    for (let i = 0; i < walls.length; i++) {
      const wall = walls[i];
      const wallBoundingBox = wall.getBoundingBox();

      if (
        nextX + 10 > wallBoundingBox.x &&
        nextX - 10 < wallBoundingBox.x + wallBoundingBox.width &&
        nextY + 10 > wallBoundingBox.y &&
        nextY - 10 < wallBoundingBox.y + wallBoundingBox.height
      ) {
        // If collision detected, stop movement
        return;
      }
    }

    // Update player position
    this.playerX = nextX;
    this.playerY = nextY;
  }

  updateRotation(dx, dy) {
    if (dx > 0) {
      // Moving right
      this.playerRotation = 0;
    } else if (dx < 0) {
      // Moving left
      this.playerRotation = PI;
    } else if (dy > 0) {
      // Moving down
      this.playerRotation = HALF_PI;
    } else if (dy < 0) {
      // Moving up
      this.playerRotation = -HALF_PI;
    }
  }
}
