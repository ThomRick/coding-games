const n = parseInt(readline());
const tree = Array(n)
  .fill(null)
  .map(() => readline())
  .map((line) => {
    const inputs = line.split(' ');
    return {
      name: inputs[ 0 ],
      parent: inputs[ 1 ] !== '-' ? inputs[ 1 ] : false,
      birth: parseInt(inputs[ 2 ]),
      death: inputs[ 3 ] !== '-' ? parseInt(inputs[ 3 ]) : false,
      religion: inputs[ 4 ],
      gender: inputs[ 5 ],
      children: []
    };
  })
  .map((person, _, persons) => {
    if (!!person.parent) {
      persons.find((pers) => pers.name === person.parent).children.push(person);
    }
    return person
  })
  .find((person) => !person.parent);
const flat = (person) => {
  const succession = [];
  if (!person.death && person.religion !== 'Catholic') {
    succession.push(person);
  }
  person.children.sort(
    (childA, childB) => childA.gender === childB.gender ? 0 : childA.gender === 'M' ? -1 : 1
  )
  person.children.forEach(
    (child) => succession.push(...flat(child))
  );
  return succession;
}
flat(tree).forEach((person) => print(person.name));

