export default class Wall {
  constructor(wallX, wallY, width, height) {
    this.wallX = wallX;
    this.wallY = wallY;
    this.width = width;
    this.height = height;
  }

  // Display the wall on the canvas
  display() {
    fill(239, 242, 239);
    rect(this.wallX, this.wallY, this.width, this.height);
  }

  // Get the bounding box of the wall for collision detection
  getBoundingBox() {
    return {
      x: this.wallX,
      y: this.wallY,
      width: this.width,
      height: this.height,
    };
  }
}
