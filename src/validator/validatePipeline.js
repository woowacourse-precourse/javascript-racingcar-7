const pipeline = (functions, input) => {
  return functions.reduce((result, fn) => fn(result), input);
};
