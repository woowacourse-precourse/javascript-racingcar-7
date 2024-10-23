export const repeat = (count, fn) => {
  Array.from({ length: count }).forEach(fn);
};
