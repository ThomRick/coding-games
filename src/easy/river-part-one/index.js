const r1 = parseInt(readline());
const r2 = parseInt(readline());

const next = (from) => {
  return from + from.toString().split('').map((element) => parseInt(element)).reduce((sum, digit) => sum += digit, 0);
}

const findIntersection = (p1, p2) =>
  p1 === p2 ? p1 : p1 < p2 ? findIntersection(next(p1), p2) : findIntersection(p1, next(p2));

print(findIntersection(r1, r2).toString());
