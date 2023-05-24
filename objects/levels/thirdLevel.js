export default class ThirdLevel {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  update() {
    // update the position of your particle
  }

  display() {
    clear();

    Floor30.display();
    Floor31.display();
    Floor32.display();
    Floor33.display();
    Floor34.display();
    Floor35.display();
    Floor36.display();
    Floor37.display();
    Floor38.display();
    Floor39.display();
    Floor40.display();
    Floor41.display();

    Wall45.display();
    Wall46.display();
    Wall47.display();
    Wall48.display();
    Wall49.display();
    Wall50.display();
    Wall51.display();
    Wall52.display();
    Wall53.display();
    Wall54.display();
    Wall55.display();
    Wall56.display();
    Wall57.display();
    Wall58.display();
    Wall59.display();
    Wall60.display();
    Wall61.display();
    Wall62.display();
    Wall63.display();
    Wall64.display();
    Wall65.display();
    Wall66.display();
    Wall67.display();
    Wall68.display();
    Wall69.display();
    Wall70.display();
    Wall71.display();
    Wall72.display();
    Wall73.display();
    Wall74.display();
    Wall75.display();
    Wall76.display();
    Wall89.display();
    Wall92.display();

    keyCardlevelThree.display();
    tokenLevelThree.display();
    //ENEMIES
    enemy10.display();
    enemy10.update();
    enemy11.display();
    enemy11.update();
    enemy12.display();
    enemy12.update();
    enemy13.display();
    enemy13.update();
    enemy14.display();
    enemy14.update();
    enemy15.display();
    enemy15.update();
    enemy16.display();
    enemy16.update();
    enemy17.display();
    enemy17.update();
    enemy18.display();
    enemy18.update();
    //PLAYER
    player3.display();

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
    player3.move(
      [
        Wall45,
        Wall46,
        Wall47,
        Wall48,
        Wall49,
        Wall50,
        Wall51,
        Wall52,
        Wall53,
        Wall54,
        Wall55,
        Wall56,
        Wall57,
        Wall58,
        Wall59,
        Wall60,
        Wall61,
        Wall62,
        Wall63,
        Wall64,
        Wall65,
        Wall66,
        Wall67,
        Wall68,
        Wall69,
        Wall70,
        Wall71,
        Wall72,
        Wall73,
        Wall74,
        Wall75,
        Wall76,
        Wall89,
        Wall92,
      ],
      dx,
      dy
    );

    // Update the player's position and rotation
    player3.updateRotation(dx, dy);
  }
}

let levelThree = new ThirdLevel();
