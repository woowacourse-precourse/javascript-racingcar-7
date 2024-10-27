import ERROR_MESSAGES from '../../constants/constants.js';

// 5글자가 넘는지 확인
const lengthOver = input => {
  input.forEach(car => {
    // car은 배열이 아닌 객체로 반환 되기때문에 car.name을 사용해야함
    if (car.name.length > 5) {
      throw new Error(ERROR_MESSAGES.OVER_LENGTH);
    }
  });
};

// input 값이 없거나 1개인지 확인 (자동차가 1개라면 경주게임이 아니라고 판단)
const nullInput = input => {
  if (input.length < 2) {
    throw new Error(ERROR_MESSAGES.NULL_INPUT);
  }
};

// 중복값이 없는지 확인
const duplicate = input => {
  const set = new Set();
  input.forEach(car => {
    if (set.has(car.name)) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_CAR);
    }
    set.add(car.name);
  });
};

// 이름에 공백이 들어갈 경우
const containsWhitespace = input => {
  input.forEach(car => {
    if (car.name.includes(' ')) {
      throw new Error(ERROR_MESSAGES.CONTAINS_WHITESPACE);
    }
  });
};
// 이름이 공백일 경우
const isEmptyName = input => {
  input.forEach(car => {
    if (car.name.trim() === '') {
      throw new Error(ERROR_MESSAGES.EMPTY_NAME);
    }
  });
};

const carInputValidator = input => {
  lengthOver(input);
  nullInput(input);
  duplicate(input);
  containsWhitespace(input);
  isEmptyName(input);
};

export default carInputValidator;
