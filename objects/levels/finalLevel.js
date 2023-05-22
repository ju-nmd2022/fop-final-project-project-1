export default class FinalLevel {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  update() {
    // update the position of your particle
  }
  display() {
    clear();
    //WALL
    Wall77.display();
    Wall78.display();
    Wall79.display();
    Wall80.display();
    Wall81.display();
    Wall82.display();
    Wall83.display();

    //ENEMIES

    //PLAYER
    player4.display();

    interfaceInstance.display();
    // Display walls
  }

  move() {
    // Check for key inputs and set the movement direction
    //dx = direction x and dy= direction y
    let dx = 0;
    let dy = 0;
    if (keyIsDown(68)) {
      // 'd' key
      dx = playerSpeed;
    } else if (keyIsDown(65)) {
      // 'a' key
      dx = -playerSpeed;
    } else if (keyIsDown(87)) {
      // 'w' key
      dy = -playerSpeed;
    } else if (keyIsDown(83)) {
      // 's' key
      dy = playerSpeed;
    }

    // Update the player's position
    player4.move(
      [Wall77, Wall78, Wall79, Wall80, Wall81, Wall82, Wall83],
      dx,
      dy
    );

    // Update the player's position and rotation
    player4.updateRotation(dx, dy);
  }
}

let levelFinal = new FinalLevel();
