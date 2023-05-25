class Winscreen2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    //floor/background
    push();
    fill(205, 190, 150);
    rect(0, 0, 800, 800);
    pop();

    //breifcase main
    push();
    strokeWeight(8);
    stroke(101, 67, 33);
    fill(27, 27, 27);
    rect(200, 200, 400, 300);
    pop();

    //briefcase roof
    push();
    strokeWeight(8);
    stroke(101, 67, 33);
    fill(27, 27, 27);
    rect(200, -12, 400, 200);
    pop();

    //hinges
    push();
    fill(150, 150, 150);
    rect(250, 190, 70, 10, 10);
    rect(480, 190, 70, 10, 10);
    pop();

    //banana shape foam
    push();
    translate(0, 30);
    strokeWeight(0);
    fill(40, 40, 40);
    beginShape();
    vertex(280, 290);
    bezierVertex(280, 390, 580, 390, 500, 270);
    bezierVertex(470, 360, 335, 340, 280, 290);
    endShape();

    push();
    translate(275, 290);
    rotate(1.2);
    translate(-280, -300);
    rect(275, 290, 15, 10);
    pop();

    push();
    rect(497, 264, 10, 15);
    pop();

    pop();

    //note with message
    push();
    translate(500, 400);
    rotate(0.5);
    translate(-490, -415);
    push();
    fill(255, 255, 0);
    rect(500, 400, 70);
    fill(0, 0, 0);
    textAlign(CENTER);
    textSize(12);
    text("YOU ARE \n SUS!!!!", 535, 430);
    pop();
    pop();

    fill(0, 0, 0);
    textSize(30);
    textAlign(CENTER);
    text("This can't be!!\n NOOOOOO!!!!! ", 400, 570);

    textSize(12);
    text("press enter to play again? D: ", 650, 690);
  }
}

let Win2 = new Winscreen2();
