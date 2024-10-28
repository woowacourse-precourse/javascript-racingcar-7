export const isEmptyString = function (string) {
  return string.trim() === '';
};

export const isLongerThan = function (len) {
  return (str) => str.length > len;
};
