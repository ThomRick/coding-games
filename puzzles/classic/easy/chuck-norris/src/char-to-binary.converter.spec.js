const expect = require('chai').expect;

class CharToBinaryConverter {
  constructor() {}

  convert(char) {
    const binary = char.charCodeAt(0).toString(2);
    if (binary.length <  7) {
      return '0'.concat(binary);
    } else {
      return binary;
    }
  }
}

describe('CharToBinaryConverter', () => {
  let converter;
  beforeEach(() => converter = new CharToBinaryConverter());
  describe('#convert()', () => {
    [
      {
        input: 'C',
        output: '1000011'
      },
      {
        input: '%',
        output: '0100101'
      }
    ].forEach((test) => {
      it(`input : ${test.input } should return output : ${ test.output }`, () => {
        const start = new Date().getTime();
        expect(converter.convert(test.input)).to.equal(test.output);
        const end = new Date().getTime();
        console.log('takes : ', end - start, 'ms');
      });
    });
  });
});