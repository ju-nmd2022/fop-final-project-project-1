class Enemy {
  constructor(enemyX, enemyY, enemyRotation) {
    this.enemyX = enemyX;
    this.enemyY = enemyY;
    this.enemyRotation = enemyRotation;
    this.rotationSpeed = 0.02;
    this.lastSwitchTime = 0;
  }

  update() {
    // Check if it's been 3 seconds since the last switch
    if (millis() - this.lastSwitchTime > 3000) {
      // Change the rotation speed direction
      this.rotationSpeed *= -1;
      // Update the last switch time to now
      this.lastSwitchTime = millis();
    }
    // Update the rotation based on the current speed
    this.enemyRotation += this.rotationSpeed;
  }

  display() {
    push();
    translate(this.enemyX, this.enemyY);
    rotate(this.enemyRotation);

    // vision cone
    fill(255, 255, 120);
    strokeWeight(0);
    beginShape();
    vertex(-10, -5);
    vertex(-20, -40);
    bezierVertex(-20, -60, 20, -60, 20, -40);
    vertex(10, -5);
    endShape();

    // enemy
    strokeWeight(2);
    fill(255, 0, 0);

    // backpack
    rect(-11, 5.5, 22, 9, 3);

    // body
    rect(-15, -7.5, 30, 15, 10);

    // visor
    fill(0, 190, 255);
    rect(-10, -11, 20, 10, 15);

    pop();
  }
}

let enemy1 = new Enemy(100, 100, 0);
let enemy2 = new Enemy(200, 200, 3);

function draw() {
  background(255, 155, 200);
  enemy1.display();
  enemy1.update();

  enemy2.display();
  enemy2.update();
}
