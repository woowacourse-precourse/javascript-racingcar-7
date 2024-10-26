const isCarNameValid = (carName) => {
  return carName.length <= 5;
};

const validateCarNames = (carNames) => {
  carNames.forEach((name) => {
    if (!isCarNameValid(name)) throw new Error("Invalid car name");
  });
  return carNames;
};

export default validateCarNames;
