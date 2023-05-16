class Wall {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw() {
    fill(255, 0, 0);
    rect(this.x, this.y, this.width, this.height);
  }
}

let Wallone = new Wall(200, 0, 10, 500);
let Walltwo = new Wall();

function draw() {
  Wallone.draw();
}
