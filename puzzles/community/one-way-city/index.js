/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
/*
  1     1     1     1     1     1
  1     2     3     4     5     6
  1     3     6    10    15    21
  1     4    10    20    35    56
  1     5    15    35    70   126
  1     6    21    56   126   252
 */

const M = parseInt(readline());
const N = parseInt(readline());

function u(i, j) {
  if (i === 1 || j === 1) {
    return 1;
  } else {
    return u(i - 1, j) + u(i, j - 1);
  }
}

// Write an action using print()
// To debug: printErr('Debug messages...');

print(u(M, N));