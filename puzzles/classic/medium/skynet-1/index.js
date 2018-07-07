const inputs = readline().split(' ');
const numberOfNodes = parseInt(inputs[0]);
const numberOfLinks = parseInt(inputs[1]);
const numberOfExits = parseInt(inputs[2]);
for (let i = 0; i < numberOfLinks; i++) {
  const link = readline().split(' ');
  const startNode = parseInt(link[0]);
  const endNode = parseInt(link[1]);
}
for (let i = 0; i < numberOfExits; i++) {
  const exit = parseInt(readline());
}
while (true) {
  const agent = parseInt(readline());
  printErr(agent);
  print('1 2');
}