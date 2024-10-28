// 빈 값 에러 처리
const checkEmpty = (input) => {
  if (input.trim() === '') {
    throw new Error('[ERROR]');
  }
};

// 배열 중복 제거
const checkDuplicate = (carList) => {
  const checkedList = new Set(carList);
  if (checkedList.size !== carList.length) {
    throw new Error('[ERROR]');
  }
};

// 이름 길이 체크
const checkNameLength = (carList) => {
  carList.forEach((name) => {
    if (name.length > 5) {
      throw new Error('[ERROR]');
    }
  });
};

// 숫자 아닐 경우 에러 처리
const checkNumber = (input) => {
  if (isNaN(input)) {
    throw new Error('[ERROR]');
  }
};

// 음수일 경우 에러 처리
const checkNegative = (input) => {
  if (input < 0) {
    throw new Error('[ERROR]');
  }
};

// 자동차 이름 배열 에러 처리
const checkCarList = (carList) => {
  checkDuplicate(carList);
  checkNameLength(carList);
};

// 횟수 에러 처리
const checkRound = (input) => {
  checkEmpty(input);
  checkNumber(input);
  checkNegative(input);
};

export { checkEmpty, checkCarList, checkRound };
