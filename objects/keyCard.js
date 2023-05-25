class KeyCard {
  constructor(
    x,
    y,
    keyCardColorR,
    keyCardColorG,
    keyCardColorB,
    playerColorR,
    playerColorG,
    playerColorB
  ) {
    this.x = x;
    this.y = y;
    this.keyCardColorR = keyCardColorR;
    this.keyCardColorG = keyCardColorG;
    this.keyCardColorB = keyCardColorB;

    this.playerColorR = playerColorR;
    this.playerColorG = playerColorG;
    this.playerColorB = playerColorB;

    this.displayEnabled = true;
  }

  update() {
    // Update the position of your particle
  }

  display() {
    if (!this.displayEnabled) {
      return; // Skip displaying if disabled
    }

    // Draw the keyCard
    push();
    strokeWeight(2);
    stroke(0, 0, 0);
    fill(30, 30, 30);
    rect(this.x - 5, this.y + 1, 55, 37.5, 5);
    // Card color
    push();
    noStroke();
    fill(this.keyCardColorR, this.keyCardColorG, this.keyCardColorB);
    rect(this.x + 32, this.y + 1.25, 12, 37);
    pop();
    // Picture on the keycard
    // Frame
    fill(255, 255, 255);
    strokeWeight(1);
    stroke(0, 0, 0);
    rect(this.x, this.y + 10, 15, 20, 1);
    // Character
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
    // Vicer
    fill(0, 150, 200);
    ellipse(this.x + 8, this.y + 20, 10 - 3, 7 - 3);
    pop();
  }

  removeDisplay() {
    this.displayEnabled = false;
  }
}

//keycards shown on interface
