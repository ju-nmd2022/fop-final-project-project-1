class LoseScreen {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  display() {
    fill(255, 0, 0);
    rect(0, 0, 800, 800);

    fill(0, 0, 0);
    textSize(40);
    textAlign(CENTER);
    text("You were Spotted!\n Press Enter to try again", 400, 300);
  }
}

let Lose = new LoseScreen();
