/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
const toFloat = (sNumber) => parseFloat(sNumber.replace(',', '.'))

const LON = toFloat(readline());
const LAT = toFloat(readline());
const N = parseInt(readline());

const mapDefibrilator = (description) => {
  const elements = description.split(';');
  return {
    name: elements[ 1 ],
    position: {
      lon: toFloat(elements[ 4 ]),
      lat: toFloat(elements[ 5 ]),
    },
  };
}

const computeDistance = (position) => {
  const x = (position.lon - LON) * Math.cos((position.lat + LAT) / 2);
  const y = (position.lat - LAT);
  return Math.sqrt((x * x) + (y * y)) * 6371;
}

const mapPositionToDistance = (defibrilator) => {
  return {
    name: defibrilator.name,
    distance: computeDistance(defibrilator.position),
  };
}
// Write an action using print()
// To debug: printErr('Debug messages...');

print(
  Array(N).fill(null)
    .map((_) => readline())
    .map(mapDefibrilator)
    .map(mapPositionToDistance)
    .reduce((previous, current) => current.distance > previous.distance ? previous : current)
    .name
);
