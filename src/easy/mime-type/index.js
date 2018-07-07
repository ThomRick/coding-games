const N = parseInt(readline()); // Number of elements which make up the association table.
const Q = parseInt(readline()); // Number Q of file names to be analyzed.

const DEFAULT_ANSWER = 'UNKNOWN';

const mimes = new Map(
  Array(N)
    .fill(null)
    .map((_) => readline().split(' '))
    .map((association) => [ association[ 0 ].toLowerCase(), association[ 1 ] ])
)

const getExtensionOf = (filename) => filename.includes('.') ?
  filename.slice(filename.lastIndexOf('.') + 1, filename.length).toLowerCase()
  :
  DEFAULT_ANSWER;

const getMimeTypeOf = (extension) => !!mimes.get(extension) ? mimes.get(extension) : DEFAULT_ANSWER;

// Write an action using print()
// To debug: printErr('Debug messages...');

// For each of the Q filenames, display on a line the corresponding MIME type. If there is no corresponding type, then display UNKNOWN.
Array(Q)
  .fill(null)
  .map((_) => getMimeTypeOf(getExtensionOf(readline())))
  .forEach((mime) => print(mime));

