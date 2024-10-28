const removeWhitespace = (input) => {
  return input.map((name) => name.trim());
};

const splitCarNames = (input) => {
  return input.split(',');
};

const splitAndRemoveWhitespace = (input) => {
  const splitNames = splitCarNames(input);
  return removeWhitespace(splitNames);
};

export { splitAndRemoveWhitespace };
