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
  // input은 객체이기 때문에 input.name으로 객체의 이름을 가져와야함
  if (input.name === null || input.name === undefined) {
    throw new Error(ERROR_MESSAGES.NULL_INPUT);
  }
};

const duplicate = input => {
  console.log('duplicate 실행');
  // input은 객체이기 때문에 input.name으로 객체의 이름을 가져와야함
  const set = new Set(input.name);
  if (input.length !== set.size) {
    throw new Error(ERROR_MESSAGES.DUPLICATE_CAR);
  }
};

const carInputValidator = input => {
  lengthOver(input);
  nullInput(input);
  duplicate(input);
};

export default carInputValidator;
