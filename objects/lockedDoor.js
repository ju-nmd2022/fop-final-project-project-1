export default class LockedDoor {
  constructor(doorX, doorY, doorWidth, doorHeight) {
    this.doorX = doorX;
    this.doorY = doorY;
    this.doorWidth = doorWidth;
    this.doorHeight = doorHeight;
  }

  // Display the wall on the canvas
  display() {
    push();
    stroke(60, 60, 60);
    rect(this.doorX, this.doorY, this.doorWidth, this.doorHeight);

    // Draw ventilation shape
    const ventWidth = this.doorWidth / 4;
    const ventHeight = this.doorHeight / 2;
    const numHorizontalLines = Math.floor(this.doorWidth / ventWidth);
    const numVerticalLines = Math.floor(this.doorHeight / ventHeight);

    for (let i = 0; i < numVerticalLines; i++) {
      for (let j = 0; j < numHorizontalLines; j++) {
        const lineX = this.doorX + j * ventWidth;
        const lineY = this.doorY + i * ventHeight;

        fill(100, 100, 100); // Set the line color to white
        rect(lineX, lineY, ventWidth, ventHeight);
      }
    }
    pop();
  }

  // Get the bounding box of the wall for collision detection
  getBoundingBox() {
    return {
      x: this.doorX,
      y: this.doorY,
      width: this.doorWidth,
      height: this.doorHeight,
    };
  }
}
