const expect = require('chai').expect;

class BinaryToChuckNorrisConverter {
  constructor() {}

  convert(binary) {
    return binary
      .replace(new RegExp('0+', 'g'), (substring) => `00 ${ substring } `)
      .replace(new RegExp('1+', 'g'), (substring) => `0 ${ substring.replace(new RegExp('1', 'g'), '0') } `)
      .trim();
  }
}

describe('BinaryToChuckNorrisConverter', () => {
  let converter;
  beforeEach(() => converter = new BinaryToChuckNorrisConverter());
  describe('#convert()', () => {
    [
      {
        input: '1000011',
        output: '0 0 00 0000 0 00'
      },
      {
        input: '10000111000011',
        output: '0 0 00 0000 0 000 00 0000 0 00'
      }
    ].forEach((test) => {
      it(`input : ${ test.input } should return output : ${ test.output }`, () => {
        const start = new Date().getTime();
        expect(converter.convert(test.input)).to.equal(test.output);
        const end = new Date().getTime();
        console.log('takes : ', end - start, 'ms');
      });
    });
  });
});