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
//level 1 enemies
// let enemy1 = new Enemy(110, 140, 6);
// let enemy2 = new Enemy(150, 400, 3.5);
// let enemy3 = new Enemy(400, 70, 3);
// let enemy4 = new Enemy(520, 490, 3);

// // level 2
// let enemy5 = new Enemy(165, 360, 0.1);
// let enemy6 = new Enemy(260, 650, 5.5);
// let enemy7 = new Enemy(240, 185, 2);
// let enemy8 = new Enemy(560, 210, 3.5);
// let enemy9 = new Enemy(590, 500, 3.2);

// // level 3
// let enemy10 = new Enemy(700, 350, 4);
// let enemy11 = new Enemy(710, 665, 4);
// let enemy12 = new Enemy(485, 485, 4);
// let enemy13 = new Enemy(455, 335, 0.5);
// let enemy14 = new Enemy(487, 155, 3);
// let enemy15 = new Enemy(230, 490, 0);
// let enemy16 = new Enemy(265, 190, 4);
// let enemy17 = new Enemy(60, 540, 5.5);
// let enemy18 = new Enemy(120, 635, 3);

function draw() {}
