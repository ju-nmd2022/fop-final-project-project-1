export default class keyCard {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.keyCardColorR = 100;
    this.keyCardColorG = 100;
    this.keyCardColorB = 200;

    this.playerColorR = 100;
    this.playerColorG = 25;
    this.playerColorB = 105;
  }

  update() {
    // update the position of your particle
  }

  draw() {
    // draw the particle
    push();
    strokeWeight(2);
    stroke(0, 0, 0);
    fill(30, 30, 30);
    scale(2);
    rect(this.x - 5, this.y + 1, 55, 37.5, 5);
    //card color
    push();
    noStroke();
    fill(this.keyCardColorR, this.keyCardColorG, this.keyCardColorB);
    rect(this.x + 32, this.y + 1.25, 12, 37);
    pop();
    //picture on the keycard
    //frame
    fill(255, 255, 255);
    strokeWeight(1);
    stroke(0, 0, 0);
    rect(this.x, this.y + 10, 15, 20, 1);
    //character
    beginShape();
    fill(this.playerColorR, this.playerColorG, this.playerColorB);
    strokeWeight(0.5);
    stroke(0, 0, 0);
    vertex(this.x + 14.75, this.y + 18);
    bezierVertex(
      this.x + 14.75,
      this.y + 18,
      this.x + 10,
      this.y + 10,
      this.x + 6,
      this.y + 19
    );
    vertex(this.x + 5, this.y + 29.75);
    vertex(this.x + 14.75, this.y + 29.75);
    vertex(this.x + 14.75, this.y + 18);
    endShape();
    //vicer
    fill(0, 150, 200);
    ellipse(this.x + 8, this.y + 20, 10 - 3, 7 - 3);
    pop();
  }
}
function draw() {
  let particle = new keyCard(59, 78);
}
