export const checkNameLength = (name) => {
  if (name.length > 5) {
    return false;
  }
};
const carSet = new Set();
export const checkNameDuplicate = (name) => {
  if (carSet.has(name)) {
    return false;
  }
};
