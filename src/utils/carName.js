export const splitStringByComma = (string) => {
  const carArray = trimArrayElements(string.split(","));
  const carObject = {};

  carArray.forEach((car) => {
    carObject[car] = 0;
  });

  return carObject;
};

const trimArrayElements = (array) => {
  return array.map((element) => element.trim());
};
