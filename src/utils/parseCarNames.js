const parseCarNames = (input) => {
  return input.split(",").map((name) => name.trim());
};

export default parseCarNames;
