export const isNumber = function (string) {
  return !isNaN(string);
};

export const isEmptyString = function (string) {
  return string.trim() === '';
};

export const isNotEmptyString = function (string) {
  return string.length !== 0;
};

export const isShorterThan = function (maxLength) {
  return (str) => str.length <= maxLength;
};

export const isLongerThan = function (len) {
  return (str) => str.length >= len;
};
