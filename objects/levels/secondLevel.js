class SecondLevel {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  update() {
    // update the position of your particle
  }

  display() {
    clear();
    //FLOOR
    Floor10.display();
    Floor11.display();
    Floor12.display();
    Floor13.display();
    Floor14.display();
    Floor15.display();
    Floor16.display();
    Floor17.display();
    Floor18.display();
    Floor19.display();
    Floor20.display();
    Floor21.display();
    Floor22.display();

    //WALL
    Wall17.display();
    Wall18.display();
    Wall19.display();
    Wall20.display();
    Wall21.display();
    Wall22.display();
    Wall23.display();
    Wall24.display();
    Wall25.display();
    Wall26.display();
    Wall27.display();
    Wall28.display();
    Wall29.display();
    Wall30.display();
    Wall31.display();
    Wall32.display();
    Wall33.display();
    Wall34.display();
    Wall35.display();
    Wall36.display();
    Wall37.display();
    Wall38.display();
    Wall39.display();
    Wall40.display();
    Wall41.display();
    Wall42.display();
    Wall43.display();
    Wall44.display();
    Wall90.display();
    Wall91.display();

    keyCardlevelTwo.display();
    tokenLevelTwo.display();
    //ENEMIES
    enemy5.display();
    enemy5.update();

    enemy6.display();
    enemy6.update();

    enemy7.display();
    enemy7.update();

    enemy8.display();
    enemy8.update();

    enemy9.display();
    enemy9.update();

    enemy21.display();
    enemy21.update();

    //PLAYER
    player.display();

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
    player.move(
      [
        Wall17,
        Wall18,
        Wall19,
        Wall20,
        Wall21,
        Wall22,
        Wall23,
        Wall24,
        Wall25,
        Wall26,
        Wall27,
        Wall28,
        Wall29,
        Wall30,
        Wall31,
        Wall32,
        Wall33,
        Wall34,
        Wall35,
        Wall36,
        Wall37,
        Wall38,
        Wall39,
        Wall40,
        Wall41,
        Wall42,
        Wall43,
        Wall44,
        Wall90,
        Wall91,
      ],
      dx,
      dy
    );

    // Update the player's position and rotation
    player.updateRotation(dx, dy);
  }
}
