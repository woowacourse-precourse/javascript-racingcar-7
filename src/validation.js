export const validateInput = (carNamesInput) => {
  if (carNamesInput === '') {
    throw new Error('[ERROR] 입력된 값이 없습니다.');
  }
  if (carNamesInput === ',') {
    throw new Error('[ERROR] 이름을 필수로 입력해야 합니다.');
  }
};

export const validateCarNames = (carNames) => {
  const carNameSet = new Set(carNames);
  if (carNameSet.size !== carNames.length) {
    throw new Error('[ERROR] 중복된 이름이 존재합니다.');
  }

  carNames.forEach((car) => {
    if (car.includes(' ')) {
      throw new Error('[ERROR] 공백은 입력할 수 없습니다.');
    }
    if (car.length > 5) {
      throw new Error('[ERROR] 이름은 5자 이하만 가능합니다.');
    }
    if (car === '') {
      throw new Error('[ERROR] 쉼표 다음에 반드시 이름을 입력해야 합니다.');
    }
  });
};

export const validateAttempts = (attempts) => {
  if (attempts === '') {
    throw new Error('[ERROR] 입력된 값이 없습니다.');
  }
  if (attempts.includes(' ')) {
    throw new Error('[ERROR] 공백은 입력할 수 없습니다.');
  }
  if (isNaN(attempts)) {
    throw new Error('[ERROR] 숫자가 아닌 값은 입력할 수 없습니다.');
  }
  if (attempts <= 0) {
    throw new Error('[ERROR] 양수만 입력할 수 있습니다.');
  }
};
