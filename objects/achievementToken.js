export default class AchievementToken {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  display() {
    push();
    strokeWeight(3 * this.size);
    stroke(219, 169, 51);
    fill(238, 181, 49);
    ellipse(this.x, this.y, 50 * this.size);
    textSize(15 * this.size);
    textAlign(CENTER);
    stroke(0, 0, 0);
    text("SUS", this.x, this.y);
    pop();
  }
}

function draw() {}
let AchievementTokenInstanceFirst = new AchievementToken(617.5 - 5, 750, 1);
let AchievementTokenInstanceSecond = new AchievementToken(677.5, 750, 1);
let AchievementTokenInstanceThird = new AchievementToken(737.5 + 5, 750, 1);
