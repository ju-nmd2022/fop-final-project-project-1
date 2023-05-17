import Wall from "./wallclass";
import Player from "./playerclass";
import Enemy from "./objects/enemyclass";

function draw() {
  //W key
  if (keyIsDown(87)) {
    player.setSpeed(3);
    //S key
  } else if (keyIsDown(83)) {
    player.setSpeed(-3);
  } else {
    player.setSpeed(0);
  }
  //A key
  if (keyIsDown(65)) {
    player.rotateLeft();
    //D key
  } else if (keyIsDown(68)) {
    player.rotateRight();
  }

  background(255, 55, 255);
  player.display();
  player.move();

  enemy1.display();
  enemy1.update();

  enemy2.display();
  enemy2.update();

  Wallone.display();
  Walltwo.display();
}
