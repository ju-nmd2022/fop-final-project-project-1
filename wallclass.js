class Wall {
  constructor(wallX, wallY, width, height) {
    this.wallX = wallX;
    this.wallY = wallY;
    this.width = width;
    this.height = height;
  }

  draw() {
    fill(255, 255, 255);
    rect(this.wallX, this.wallY, this.width, this.height);
  }
}

let Wallone = new Wall(200, 0, 10, 500);
let Walltwo = new Wall(200, 500, 300, 10);

function draw() {
  Wallone.draw();
  Walltwo.draw();
}
