const validationUtils = {
    validateCarNames(carNames) {
      carNames.forEach(name => {
        if (name.length > 5) {
          throw new Error('자동차 이름은 5자 이하만 가능합니다.');
        }
      });
    },
  
    validateRoundCount(roundCount) {
      if (isNaN(roundCount) || roundCount <= 0) {
        throw new Error('시도할 횟수는 1 이상의 정수여야 합니다.');
      }
    }
  };
  
  export default validationUtils;
  