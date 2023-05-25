class Briefcase {
  constructor(briefcaseX, briefcaseY) {
    this.briefcaseX = briefcaseX;
    this.briefcaseY = briefcaseY;
  }

  display() {
    push();
    translate(this.briefcaseX, this.briefcaseY);
    scale(1);
    fill(150, 75, 0);
    rect(200, 200, 50, 35, 5);
    fill(200, 200, 200);
    rect(217, 192, 16, 3, 2, 2, 0, 0);
    rect(217, 195, 4, 5);
    rect(229, 195, 4, 5);
    fill(255, 201, 180);
    rect(200, 212, 50, 10);
    pop();
  }
}
