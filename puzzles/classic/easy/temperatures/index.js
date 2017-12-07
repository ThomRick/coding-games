/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

let closest;
const n = parseInt(readline()); // the number of temperatures to analyse
if (n === 0) {
  closest = 0;
} else {
  const inputs = readline().split(' ');
  for (let i = 0; i < n; i++) {
    const temperature = parseInt(inputs[i]); // a temperature expressed as an integer ranging from -273 to 5526
    if (closest === undefined) {
      closest = temperature;
    } else if (Math.abs(0 - closest) > Math.abs(0 - temperature)) {
      closest = temperature;
    } else if (Math.abs(closest) === Math.abs(temperature)) {
      closest = closest < 0 ? temperature : closest;
    }
  }
}

// Write an action using print()
// To debug: printErr('Debug messages...');

print(closest);