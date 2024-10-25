const pipeline = function pipelineFunc(functions, input) {
  return functions.reduce((result, fn) => fn(result), input);
};
