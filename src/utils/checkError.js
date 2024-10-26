export const isNoName = (name) => {
  if (name.length == 0) {
    throw new Error('[ERROR] 자동차 이름 입력 없음 오류');
  }
};

export const isOverName = (name) => {
  if (name.length > 5) {
    throw new Error('[ERROR] 자동차 이름 길이 입력 오류');
  }
};

export const isDuplicateName = (nameList) => {
  const nameSet = new Set(nameList);
  if (nameList.length != nameSet.size) {
    throw new Error('[ERROR] 중복 이름 입력 오류');
  }
};

export const isNotNumber = (numberString) => {
  if (!numberString.match(/^[0-9]+$/)) {
    throw new Error('[ERROR] 숫자가 아닌 문자 입력 오류');
  }
};
