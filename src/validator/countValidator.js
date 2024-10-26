const validateIsNumber = (value) => {
  if (isNaN(value)) throw new Error("Input is not a vaild number");
  return parseInt(value);
};

const validateIsZero = (value) => {
  if (value === 0) throw new Error("Input is zero");
  return value;
};

const validateIsNonNegative = (value) => {
  if (value < 0) throw new Error("Input is a nagative number");
  return value;
};

const validateCount = (input) => {
  const count = validateIsNumber(input);
  validateIsZero(count);
  validateIsNonNegative(count);

  return count;
};

export default validateCount;
