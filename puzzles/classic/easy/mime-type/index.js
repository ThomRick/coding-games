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

const nbrOfMimeTypeElements = parseInt(readline()); // Number of elements which make up the association table.
const nbrOfFilenames = parseInt(readline()); // Number Q of file names to be analyzed.
const mimes = new Map();
for (let i = 0; i < nbrOfMimeTypeElements; i++) {
  const inputs = readline().split(' ');
  const extension = inputs[0]; // file extension
  const mime = inputs[1]; // MIME type.
  mimes.set(extension.toLowerCase(), mime);
}

const identifier = new MimeIdentifier(mimes);
const outputs = [];
for (let i = 0; i < nbrOfFilenames; i++) {
  const filename = readline(); // One file name per line.
  outputs.push(identifier.identify(filename));
}

// Write an action using print()
// To debug: printErr('Debug messages...');


// For each of the Q filenames, display on a line the corresponding MIME type. If there is no corresponding type, then display UNKNOWN.
outputs.forEach((output) => print(output));
