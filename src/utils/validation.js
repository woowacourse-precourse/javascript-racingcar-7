import {
  NAME_LENGTH_ERROR,
  NAME_DUPLICATE_ERROR,
  EXECUTE_COUNT_ERROR,
} from "./constant.js";

export const checkNameLength = (name) => {
  if (name.length > 5 || name.length < 1) {
    throw new Error(NAME_LENGTH_ERROR);
  }
};
const carSet = new Set();
export const checkNameDuplicate = (name) => {
  if (carSet.has(name)) {
    carSet.clear();
    throw new Error(NAME_DUPLICATE_ERROR);
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
    throw new Error(EXECUTE_COUNT_ERROR);
  }
};
export const resetCarSet = () => {
  carSet.clear();
};
