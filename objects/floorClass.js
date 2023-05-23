export default class Floor {
  constructor(floorX, floorY, floorWidth, floorHeight) {
    this.floorX = floorX;
    this.floorY = floorY;
    this.floorWidth = floorWidth;
    this.floorHeight = floorHeight;
  }

  // Display the wall on the canvas
  display() {
    push();
    noStroke();
    fill(205, 190, 200);
    rect(this.floorX, this.floorY, this.floorWidth, this.floorHeight);
    pop();
  }
}
