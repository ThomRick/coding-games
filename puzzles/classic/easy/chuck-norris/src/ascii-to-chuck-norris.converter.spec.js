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

class BinaryToChuckNorrisConverter {
  constructor() {}

  convert(binary) {
    return binary
      .replace(new RegExp('0+', 'g'), (substring) => `00 ${ substring } `)
      .replace(new RegExp('1+', 'g'), (substring) => `0 ${ substring.replace(new RegExp('1', 'g'), '0') } `)
      .trim();
  }
}

class AsciiToChuckNorrisConverter {
  constructor() {
    this.binary = new CharToBinaryConverter();
    this.chuck = new BinaryToChuckNorrisConverter();
  }

  convert(ascii) {
    const characters = ascii.split('');
    const binary = characters.map((character) => this.binary.convert(character)).join('');
    return this.chuck.convert(binary);
  }
}

describe('AsciiToChuckNorrisConverter', () => {
  let converter;
  beforeEach(() => converter = new AsciiToChuckNorrisConverter());
  describe('#convert()', () => {
    [
      {
        input: 'C',
        output: '0 0 00 0000 0 00'
      },
      {
        input: 'CC',
        output: '0 0 00 0000 0 000 00 0000 0 00'
      },
      {
        input: '%',
        output: '00 0 0 0 00 00 0 0 00 0 0 0'
      },
      {
        input: '%%',
        output: '00 0 0 0 00 00 0 0 00 0 0 0 00 0 0 0 00 00 0 0 00 0 0 0'
      },
      {
        input: 'Chuck Norris\' keyboard has 2 keys: 0 and white space.',
        output: '0 0 00 0000 0 0000 00 0 0 0 00 000 0 000 00 0 0 0 00 0 0 000 00 000 0 0000 00 0 0 0 00 0 0 00 00 0 0 0 00 00000 0 0 00 00 0 000 00 0 0 00 00 0 0 0000000 00 00 0 0 00 0 0 000 00 00 0 0 00 0 0 00 00 0 0 0 00 00 0 0000 00 00 0 00 00 0 0 0 00 00 0 000 00 0 0 0 00 00000 0 00 00 0 0 0 00 0 0 0000 00 00 0 0 00 0 0 00000 00 00 0 000 00 000 0 0 00 0 0 00 00 0 0 000000 00 0000 0 0000 00 00 0 0 00 0 0 00 00 00 0 0 00 000 0 0 00 00000 0 00 00 0 0 0 00 000 0 00 00 0000 0 0000 00 00 0 00 00 0 0 0 00 000000 0 00 00 00 0 0 00 00 0 0 00 00000 0 00 00 0 0 0 00 0 0 0000 00 00 0 0 00 0 0 00000 00 00 0 0000 00 00 0 00 00 0 0 000 00 0 0 0 00 00 0 0 00 000000 0 00 00 00000 0 0 00 00000 0 00 00 0000 0 000 00 0 0 000 00 0 0 00 00 00 0 0 00 000 0 0 00 00000 0 000 00 0 0 00000 00 0 0 0 00 000 0 00 00 0 0 0 00 00 0 0000 00 0 0 0 00 00 0 00 00 00 0 0 00 0 0 0 00 0 0 0 00 00000 0 000 00 00 0 00000 00 0000 0 00 00 0000 0 000 00 000 0 0000 00 00 0 0 00 0 0 0 00 0 0 0 00 0 0 000 00 0'
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