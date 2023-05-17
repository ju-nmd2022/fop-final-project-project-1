export default class Wall {
  constructor(wallX, wallY, width, height) {
    this.wallX = wallX;
    this.wallY = wallY;
    this.width = width;
    this.height = height;
  }

  display() {
    fill(255, 255, 255);
    rect(this.wallX, this.wallY, this.width, this.height);
  }
}
function checkCollision(player) {
  for (let i = 0; i < walls.length; i++) {
    let wall = walls[i];
    if (
      player.getX() > wall.wallX &&
      player.getX() < wall.wallX + wall.width &&
      player.getY() > wall.wallY &&
      player.getY() < wall.wallY + wall.height
    ) {
      return true; // Collision detected
    }
  }
  return false; // No collision
}

let Wallone = new Wall(200, 0, 10, 500);
let Walltwo = new Wall(200, 500, 300, 10);

function draw() {
  Wallone.display();
  Walltwo.display();
}
