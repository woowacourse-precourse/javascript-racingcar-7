export const isNoName = (name) => {
  if (name.length == 0) {
    throwError('[ERROR]', '자동차 이름 입력 없음 오류');
  }
};

export const isOverName = (name) => {
  if (name.length > 5) {
    throwError('[ERROR]', '자동차 이름 길이 입력 오류');
  }
};

export const isDuplicateName = (nameList) => {
  const nameSet = new Set(nameList);
  if (nameList.length != nameSet.size) {
    throwError('[ERROR]', '중복 이름 입력 오류');
  }
};

export const isNotNumber = (numberString) => {
  if (!numberString.match(/^[0-9]+$/)) {
    throwError('[ERROR]', '숫자가 아닌 문자 입력 오류');
  }
};

const throwError = (prefix, message) => {
  throw new Error(`${prefix} ${message}`);
};
