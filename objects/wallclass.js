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
  
    getBoundingBox() {
      return {
        x: this.wallX,
        y: this.wallY,
        width: this.width,
        height: this.height,
      };
    }
  }  
}
