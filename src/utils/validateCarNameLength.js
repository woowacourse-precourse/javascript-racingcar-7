const validateCarNameLength = (carNames) => {
  carNames.forEach((name) => {
    if (name.length > 5) {
      throw new Error('자동차 이름은 다섯 글자 이하여야 합니다.');
    }
  });
};

export default validateCarNameLength;
