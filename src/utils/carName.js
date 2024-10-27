export const splitStringByComma = (string) => {
  return trimArrayElements(string.split(","));
};

const trimArrayElements = (array) => {
  return array.map((element) => element.trim());
};
