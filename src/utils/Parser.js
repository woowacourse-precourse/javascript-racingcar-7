const Parser = {
  splitSpring: (input) => input.split(',').map((name) => name.trim()),
  parseNumber: (input) => Number(input),
};

export default Parser;
