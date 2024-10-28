import {
  ERROR_NAME_LENGTH,
  ERROR_NAME_DUPLICATE,
  ERROR_EXECUTE_COUNT,
} from "./constant.js";

export const checkNameLength = (name) => {
  if (name.length > 5 || name.length < 1) {
    throw new Error(ERROR_NAME_LENGTH);
  }
};
const carSet = new Set();
export const checkNameDuplicate = (name) => {
  if (carSet.has(name)) {
    carSet.clear();
    throw new Error(ERROR_NAME_DUPLICATE);
  }
  carSet.add(name);
};
export const validateCarName = (name) => {
  checkNameDuplicate(name);
  checkNameLength(name);
};
export const countValidate = (input) => {
  const count = parseInt(input, 10);
  if (input < 1 || isNaN(count)) {
    throw new Error(ERROR_EXECUTE_COUNT);
  }
};
export const resetCarSet = () => {
  carSet.clear();
};
