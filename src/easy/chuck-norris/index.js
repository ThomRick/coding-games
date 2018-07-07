/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
const charToBinary = (char) => {
  const binary = char.charCodeAt(0).toString(2);
  return (binary.length <  7) ? '0'.concat(binary) : binary;
}

const asciiToBinay = (ascii) => ascii.split('').map((char) => charToBinary(char)).join('');

const binaryToChuckNorris = (binary) => {
  return binary
    .replace(new RegExp('0+', 'g'), (substring) => `00 ${ substring } `)
    .replace(new RegExp('1+', 'g'), (substring) => `0 ${ substring.replace(new RegExp('1', 'g'), '0') } `)
    .trim();
}

const convert = (ascii) => binaryToChuckNorris(asciiToBinay(ascii));

print(convert(readline()));
