/**
 * The while loop represents the game.
 * Each iteration represents a turn of the game
 * where you are given inputs (the heights of the mountains)
 * and where you have to print an output (the index of the mountain to fire on)
 * The inputs you are given are automatically updated according to your last actions.
 **/

while (true) {
  let mountains = [];
  for (let i = 0; i < 8; i++) {
    const height = parseInt(readline()); // represents the height of one mountain.
    mountains.push({
      id: i.toString(),
      height
    });
  }
  mountains = mountains.sort((mountainA, mountainB) => mountainA.height < mountainB.height ? 1 : -1);

  // Write an action using print()
  // To debug: printErr('Debug messages...');
  print(mountains[0].id); // The index of the mountain to fire on.
}