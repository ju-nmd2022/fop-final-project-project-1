class StartScreen {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    //center of object
    let x = 300;
    let y = 300;

    //edit body color
    let bodyColorRed = 245;
    let bodyColorGreen = 245;
    let bodyColorBlue = 0;

    //edit shadow color
    let shadowColorRed = 225;
    let shadowColorGreen = 225;
    let shadowColorBlue = 0;

    //edit scale
    let selfieScale = 0.3;

    //text, background
    push();
    translate(0, 150);
    push();
    noStroke();
    fill(185, 170, 130, 80);
    translate(0, 50);
    rect(100, 175, 200, 75, 15);
    rect(325, 175, 375, 75, 15);
    rect(100, 275, 200, 200, 15);
    rect(325, 275, 375, 200, 15);
    rect(100, -125, 600, 275, 15);
    pop();

    //canvas background
    push();
    translate(100, 320);
    scale(selfieScale);
    strokeWeight(5);

    //card

    //body
    fill(bodyColorRed, bodyColorGreen, bodyColorBlue);
    rect(x - 150, y, 300, 250);
    ellipse(x, y, 300, 250);

    push();
    noStroke();

    //rectangle which hides a stroke element
    rect(155, y, 289, 230);

    //shadow on body
    beginShape();
    fill(shadowColorRed, shadowColorGreen, shadowColorBlue);
    vertex(153, 490);
    vertex(153, 548);
    vertex(448, 548);
    vertex(448, 300);
    bezierVertex(448, 300, 350, 500, 153, 490);
    endShape();

    pop();

    //backpack
    fill(bodyColorRed, bodyColorGreen, bodyColorBlue);
    rect(450, 375, 100, 175, 0, 50, 0);

    //shadow on backpack
    push();

    noStroke();
    fill(shadowColorRed, shadowColorGreen, shadowColorBlue);
    rect(452.5, 407.5, 95, 140, 0, 50, 0);

    pop();

    //glasses
    fill(159, 202, 229);
    rect(100, 280, 230, 150, 100);

    push();
    noStroke();
    //white dot on the glasses
    fill(244, 244, 255);
    ellipse(200, 320, 110, 40);

    pop();
    pop();
    fill(255, 255, 255);
    textSize(30);
    textAlign(CENTER);
    textStyle(BOLD);
    text("Character", 190, 275);
    text("Controls", 400, 275);

    noStroke();
    fill(205, 190, 150);
    rect(475, 355, 70, 70, 10);
    rect(475 - 80, 435, 70, 70, 10);
    rect(475, 435, 70, 70, 10);
    rect(475 + 80, 435, 70, 70, 10);

    //text
    fill(255, 255, 255);
    textSize(30);
    text("W", 510, 400);
    text("A", 430, 480);
    text("S", 510, 480);
    text("D", 590, 480);

    textSize(30);
    text(
      "Find out who is sus! \n-\nPick up keycards to progress through the rooms.\n-\nDon't let the enemies spot you!",
      150,
      -45,
      500
    );
    pop();

    fill(255, 255, 255);
    textSize(30);
    textAlign(CENTER);
    textStyle(BOLD);
    text("Press ENTER to start", 800 / 2, 750);
  }
}
