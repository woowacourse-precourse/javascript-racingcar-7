import throwError from "../utils/throwError";

const validateCarNames = (carName) => {
  if (carName.length > 5) throwError("Invalid car name");
  return carName;
};

export default validateCarNames;
