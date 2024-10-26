const validateCarNames = (carName) => {
  if (carName.length > 5) throw new Error("Invalid car name");
  return carName;
};

export default validateCarNames;
