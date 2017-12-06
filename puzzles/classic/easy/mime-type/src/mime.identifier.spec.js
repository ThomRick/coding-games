const expect = require('chai').expect;

class MimeIdentifier {
  constructor(mimes) {
    this.mimes = mimes;
  }

  identify(filename) {
    const extension = this.extractExtension(filename);
    const mime = this.mimes.get(extension.toLowerCase());
    return mime !== undefined ? mime : 'UNKNOWN';
  }

  extractExtension(filename) {
    const elements = filename.split('.');
    return elements.length > 1 ? elements[ elements.length - 1 ] : '';
  }
}

describe('MimeIdentifier', () => {
  const mimes = new Map([
    [ 'html', 'text/html' ]
  ]);
  const identifier = new MimeIdentifier(mimes);
  describe('#identify()', () => {
    [
      {
        input: 'index.html',
        output: 'text/html'
      },
      {
        input: 'source.cpp',
        output: 'UNKNOWN'
      },
      {
        input: 'b.html.tmp',
        output: 'UNKNOWN'
      },
      {
        input: 'html',
        output: 'UNKNOWN'
      },
      {
        input: '.html.',
        output: 'UNKNOWN'
      },
      {
        input: 'final.',
        output: 'UNKNOWN'
      },
      {
        input: 'final.Html',
        output: 'text/html'
      }
    ].forEach((test) => {
      it(`input : "${ test.input }" should return output : "${ test.output }"`, () => {
        expect(identifier.identify(test.input)).to.equal(test.output);
      });
    });
  });
});