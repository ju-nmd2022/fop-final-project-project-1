export default class AchievementToken {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;

    this.displayEnabled = true;
  }

  display() {
    if (!this.displayEnabled) {
      return; //skip display if disabled
    }

    push();
    strokeWeight(3 * this.size);
    stroke(219, 169, 51);
    fill(238, 191, 59);
    ellipse(this.x, this.y, 50 * this.size);
    textSize(18 * this.size);
    textAlign(CENTER);
    text("SUS", this.x, this.y + 7);
    pop();
  }
  removeDisplay() {
    this.displayEnabled = false;
  }
}

function draw() {
  AchievementTokenInstanceFirst.display();
}
