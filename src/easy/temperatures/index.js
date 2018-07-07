/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // the number of temperatures to analyse
const inputs = readline().split(' ');

const findClosest = (nbr) => Array(nbr)
  .fill(null)
  .map((_, index) => parseInt(inputs[ index ]))
  .reduce((closest, temperature) => 
    Math.abs(0 - closest) < Math.abs(0 - temperature) ? closest : temperature
    &&
    Math.abs(0 - closest) === Math.abs(0 - temperature) && closest > 0 ? closest : temperature
  )

const closest = (nbr) => nbr === 0 ? 0 : findClosest(nbr)

// Write an action using print()
// To debug: printErr('Debug messages...');

print(closest(n));
