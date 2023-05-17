import Wall from "./objects/wallclass";
import Player from "./objects/playerclass";
import Enemy from "./objects/enemyclass";
import Interface from "./objects/interface";
import KeyCard from "./objects/keyCard";

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

  background(15, 61, 15);
  player.display();
  player.move();

  enemy1.display();
  enemy1.update();

  enemy2.display();
  enemy2.update();

  Wallone.display();
  Walltwo.display();

  interfaceInstance.display();

  // Define an array to store the boolean values for each key card
  const keyCardBooleans = [true, true, false]; // Set the initial values to true

  // Define an array to store the key card instances
  const keyCards = [
    keyCardInstanceFirst,
    keyCardInstanceSecond,
    keyCardInstanceThird,
  ];

  // Loop through the key card instances
  for (let i = 0; i < keyCards.length; i++) {
    // Check the corresponding boolean value for the current key card
    if (keyCardBooleans[i]) {
      // If the boolean value is true, display the key card
      keyCards[i].display();
    }
  }
}
