export const checkNameLength = (name) => {
  if (name.length > 5 || name.length < 1) {
    throw new Error("자동차 이름은 1~5자 이내로 입력해야 합니다.");
  }
};
const carSet = new Set();
export const checkNameDuplicate = (name) => {
  if (carSet.has(name)) {
    throw new Error("자동차 이름이 중복입니다.");
  }
  carSet.add(name);
};
export const validateCarName = (name) => {
  checkNameDuplicate(name);
  checkNameLength(name);
};
