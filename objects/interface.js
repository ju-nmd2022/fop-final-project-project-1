export default class Interface {
  constructor() {
    //counter
    this.counterColorR = 0;
    this.counterColorG = 255;
    this.counterColorB = 0;
    //screw
    this.screws = [
      new Screw(235, 725, 2, 10),
      new Screw(235, 775, 2, 10),
      new Screw(10, 725, 2, 10),
      new Screw(10, 775, 2, 10),
      new Screw(338, 725, 2, 10),
      new Screw(338, 775, 2, 10),
      new Screw(462, 725, 2, 10),
      new Screw(462, 775, 2, 10),
      new Screw(565, 725, 2, 10),
      new Screw(565, 775, 2, 10),
      new Screw(790, 725, 2, 10),
      new Screw(790, 775, 2, 10),
    ];
  }

  // drawing of the player
  display() {
    //interface
    strokeWeight(3);
    //interface background
    fill(128, 128, 128);
    rect(0, 700, 800, 100);
    fill(105, 105, 105);
    //left rectangle
    rect(0, 712.5, 250, 75, 0, 10, 10, 0);

    //time rectangle
    rect(325, 712.5, 150, 75, 10);
    //counter
    //innerplate
    push();
    fill(this.counterColorR, this.counterColorG, this.counterColorB);
    rect(350, 725, 100, 50, 10);
    pop();

    //code inspired by p5js website
    push();
    fill(0, 0, 0);
    textFont("DS-Digital");
    textSize(40);
    textAlign(CENTER);
    text(0 + 2 + ":" + 0 + 1, 400, 762.5);
    pop();

    //right rectangle
    rect(800 - 250, 712.5, 250, 75, 10, 0, 0, 10);

    for (const screw of this.screws) {
      screw.display();
    }

    //shadows
    //achivements
    push();
    noStroke();
    fill(55, 55, 55);
    //first achivement
    ellipse(617.5 - 5, 750, 50);
    //second achivement
    ellipse(677.5, 750, 50);
    //third achivement
    ellipse(737.5 + 5, 750, 50);

    //keycard
    fill(55, 55, 55);
    //first keycard
    rect(25, 731, 55, 37.5, 5);
    //second keycard
    rect(95, 731, 55, 37.5, 5);
    //third keycard
    rect(165, 731, 55, 37.5, 5);
    pop();
  }
}
//screw
class Screw {
  constructor(screwPositionX, screwPositionY, screwStrokeWeight, screwSize) {
    this.screwPositionX = screwPositionX;
    this.screwPositionY = screwPositionY;
    this.screwStrokeWeight = screwStrokeWeight;
    this.screwSize = screwSize;
  }

  display() {
    strokeWeight(this.screwStrokeWeight);
    fill(128, 128, 128);
    ellipse(this.screwPositionX, this.screwPositionY, this.screwSize);
    strokeWeight(this.screwStrokeWeight);
    line(
      this.screwPositionX - 2,
      this.screwPositionY,
      this.screwPositionX + 2,
      this.screwPositionY
    );
    line(
      this.screwPositionX,
      this.screwPositionY - 2,
      this.screwPositionX,
      this.screwPositionY + 2
    );
  }
}

let interfaceInstance = new Interface();
function draw() {
  interfaceInstance.display();
}
