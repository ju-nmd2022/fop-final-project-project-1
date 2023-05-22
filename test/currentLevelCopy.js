export default class FirstLevel {
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
    Wallone.display();
    Walltwo.display();
    Wallthree.display();
    Wallfour.display();
    Wallfive.display();
    Wallsix.display();
    Wallseven.display();
    Walleight.display();
    Wallnine.display();
    Wallten.display();
    Wallelven.display();
    Walltwelve.display();
    Wallthirteen.display();
    Wallfourteen.display();
    Wallfifteen.display();
    Wallsixteen.display();
    Wall84.display();
    Wall85.display();

    //ENEMIES
    enemy1.display();
    enemy1.update();

    enemy2.display();
    enemy2.update();

    enemy3.display();
    enemy3.update();

    enemy4.display();
    enemy4.update();

    //PLAYER
    player.display();
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
        Wallone,
        Walltwo,
        Wallthree,
        Wallfour,
        Wallfive,
        Wallsix,
        Wallseven,
        Walleight,
        Wallnine,
        Wallten,
        Wallelven,
        Walltwelve,
        Wallthirteen,
        Wallfourteen,
        Wallfifteen,
        Wallsixteen,
        Wall84,
        Wall85,
      ],
      dx,
      dy
    );

    // Update the player's position and rotation
    player.updateRotation(dx, dy);
  }
}

let levelOne = new FirstLevel();
