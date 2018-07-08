const OPEN_CURLY_BRACKET = '{';
const CLOSE_CURLY_BRACKET = '}';
const OPEN_PARENTHESE = '(';
const CLOSE_PARENTHESE = ')';
const OPEN_SQUARE_BRACKET = '[';
const CLOSE_SQUARE_BRACKET = ']';
const ANALYZED_CHARS = [
  OPEN_CURLY_BRACKET,
  OPEN_PARENTHESE,
  OPEN_SQUARE_BRACKET,
  CLOSE_CURLY_BRACKET,
  CLOSE_PARENTHESE,
  CLOSE_SQUARE_BRACKET
];
const rebuild = (exp) => exp.split('').reduce(
  (built, char) => ANALYZED_CHARS.includes(char) ? built += char : built, ''
);
const isValid = (exp) => 
  (exp[ 0 ] === OPEN_CURLY_BRACKET && exp[ 1 ] === CLOSE_CURLY_BRACKET)
  ||
  (exp[ 0 ] === OPEN_PARENTHESE && exp[ 1 ] === CLOSE_PARENTHESE)
  ||
  (exp[ 0 ] === OPEN_SQUARE_BRACKET && exp[ 1 ] === CLOSE_SQUARE_BRACKET)
  ||
  (exp[ 0 ] === OPEN_CURLY_BRACKET && exp[ exp.length - 1 ] === CLOSE_CURLY_BRACKET && isValid(exp.slice(1, exp.length - 1)))
  ||
  (exp[ 0 ] === OPEN_PARENTHESE && exp[ exp.length - 1 ] === CLOSE_PARENTHESE && isValid(exp.slice(1, exp.length - 1)))
  ||
  (exp[ 0 ] === OPEN_SQUARE_BRACKET && exp[ exp.length - 1 ] === CLOSE_SQUARE_BRACKET && isValid(exp.slice(1, exp.length - 1)))
print(isValid(rebuild(readline())));
