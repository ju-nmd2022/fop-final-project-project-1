class Enemy {
  constructor(enemyX, enemyY, enemyRotation) {
    this.enemyX = enemyX;
    this.enemyY = enemyY;
    this.enemyRotation = enemyRotation;
    this.rotationSpeed = 0.02;
    this.lastSwitchTime = 0;
    this.dotDistanceX = 0;
    this.dotDistanceY = 0;
  }

  //ChatGPT helped with explaing how to code
  // the rotation of enemies
  update() {
    const switchInterval = 4500; // Interval for switching rotation speed (in milliseconds)

    if (!this.switchTimeout) {
      // If switchTimeout doesn't exist, set it to a new timeout
      this.switchTimeout = setTimeout(() => {
        // Change the rotation speed direction
        this.rotationSpeed *= -1;
        // Reset switchTimeout and update the rotation
        this.switchTimeout = null;
        this.enemyRotation += this.rotationSpeed;
      }, switchInterval);
    }

    // Update the rotation based on the current speed
    this.enemyRotation += this.rotationSpeed;

    this.dotDistanceX =
      this.enemyX + cos(this.enemyRotation - HALF_PI + this.rotationSpeed) * 40;
    this.dotDistanceY =
      this.enemyY + sin(this.enemyRotation - HALF_PI + this.rotationSpeed) * 40;
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

function draw() {}
