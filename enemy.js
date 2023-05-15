class Enemy {
  constructor(x, y, rotation) {
    this.x = x;
    this.y = y;
    this.rotation = rotation;
  }

  draw() {
    push();
    translate(this.x, this.y);
    rotate(this.rotation);

    //vision cone
    fill(255, 255, 120);
    strokeWeight(0);
    beginShape();
    vertex(-10, -5);
    vertex(-20, -40);
    bezierVertex(-20, -60, 20, -60, 20, -40);
    vertex(10, -5);
    endShape();

    //enemy
    strokeWeight(2);
    fill(255, 0, 0);

    //backpack
    rect(-11, 5.5, 22, 9, 3);

    //body
    rect(-15, -7.5, 30, 15, 10);

    //visor
    fill(0, 190, 255);
    rect(-10, -11, 20, 10, 15);

    // line in visor
    beginShape();
    strokeWeight(1.5);
    stroke(255, 255, 255);
    noFill();
    vertex(-4.5, -4);
    bezierVertex(0 - 7, 0 - 3, 0 + 13, 0 - 5, 0 + 17, 0);
    endShape();

    pop();
  }
}

let Enemy1 = new Enemy(100, 100, 0);

function draw() {
  background(255, 155, 200);
  Enemy1.draw();
}
