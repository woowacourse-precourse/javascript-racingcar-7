import ERROR_MESSAGES from '../../constants/constants.js';

const lengthOver = input => {
  input.forEach(car => {
    // car은 배열이 아닌 객체로 반환 되기때문에 car.name을 사용해야함
    if (car.name.length > 5) {
      throw new Error(ERROR_MESSAGES.OVER_LENGTH);
    }
  });
};

const nullInput = input => {
  if (input.length < 2) {
    throw new Error(ERROR_MESSAGES.NULL_INPUT);
  }
};

const duplicate = input => {
  const set = new Set();
  input.forEach(car => {
    if (set.has(car.name)) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_CAR);
    }
    set.add(car.name);
  });
};

const carInputValidator = input => {
  lengthOver(input);
  nullInput(input);
  duplicate(input);
};

export default carInputValidator;
