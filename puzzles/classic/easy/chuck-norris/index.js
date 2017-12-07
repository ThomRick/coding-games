/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
class CharToBinaryConverter {
  convert(char) {
    const binary = char.charCodeAt(0).toString(2);
    return (binary.length <  7) ? '0'.concat(binary) : binary;
  }
}
class BinaryToChuckNorrisConverter {
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
    return this.chuck.convert(ascii.split('').map((character) => this.binary.convert(character)).join(''));
  }
}
print(new AsciiToChuckNorrisConverter().convert(readline()));