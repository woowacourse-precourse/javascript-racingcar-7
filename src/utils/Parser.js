const Parser = {
  splitSpring: (input) => {
    return input.split(",").map((name) => name.trim());
  },
  parseNumber: (input) => {
    return Number(input);
  },
};

export default Parser;
