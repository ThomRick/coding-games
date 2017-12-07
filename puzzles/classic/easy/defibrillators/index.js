/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
class Position {
  constructor(longitude, latitude) {
    this.longitude = parseFloat(longitude.replace(',', '.'));
    this.latitude = parseFloat(latitude.replace(',', '.'));
  }
}

class User {
  constructor(position) {
    this.position = position;
  }
}

class Defibrillator {
  constructor(description) {
    const elements = description.split(';');
    this.id = elements[0];
    this.name = elements[1];
    this.address = elements[2];
    this.phone = elements[3];
    this.position = new Position(elements[4], elements[5]);
  }
}

class DistanceEvaluator {
  constructor() {}

  evaluate(positionA, positionB) {
    const x = (positionB.longitude - positionA.longitude) * Math.cos((positionA.latitude + positionB.latitude) / 2);
    const y = (positionB.latitude - positionA.latitude);
    return Math.sqrt((x * x) + (y * y)) * 6371;
  }
}

const longitude = readline();
const latitude = readline();
const user = new User(new Position(longitude, latitude));

const nbrOfDefibrillators = parseInt(readline());
const defibrillators = [];
for (let i = 0; i < nbrOfDefibrillators; i++) {
  const description = readline();
  defibrillators.push(new Defibrillator(description));
}

const evaluator = new DistanceEvaluator();
let distances = defibrillators.map((defibrillator) => {
  return {
    id: defibrillator.id,
    value: evaluator.evaluate(user.position, defibrillator.position)
  };
});
distances = distances.sort((distanceA, distanceB) => distanceA.value > distanceB.value ? 1 : -1);

print(defibrillators.find((defibrillator) => defibrillator.id === distances[0].id).name);