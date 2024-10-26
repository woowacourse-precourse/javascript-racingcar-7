export const checkNameLength = (name) => {
  if (name.length > 5 || name.length < 1) {
    throw new Error("[ERROR] 자동차 이름은 1~5자 이내로 입력해야 합니다.");
  }
};
const carSet = new Set();
export const checkNameDuplicate = (name) => {
  if (carSet.has(name)) {
    carSet.clear();
    throw new Error("[ERROR] 자동차 이름이 중복입니다.");
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
    throw new Error("[ERROR] 시도할 횟수는 1 이상의 숫자여야 합니다.");
  }
};
export const resetCarSet = () => {
  carSet.clear();
};
