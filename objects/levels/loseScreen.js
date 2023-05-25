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
    image(img, 0, 0, 800, 800);

    //we stole the image from group 2
    push();
    strokeWeight(4);
    stroke(0, 0, 0);
    fill(255, 255, 255);
    textSize(30);
    textAlign(CENTER);
    textStyle(BOLD);
    text("Press ENTER to retry", 800 / 2, 750);
    pop();
  }
}

let Lose = new LoseScreen();
