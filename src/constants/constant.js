const INPUT_MESSAGE = Object.freeze({
  carNames: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
});

const CAR_NAME_LENGTH = Object.freeze({
  minRange: 1,
  maxRange: 5,
});

const ERROR_MESSAGE = Object.freeze({
  carNameError: '[ERROR] 이름은 5자 이하로 적어주세요.',
});

export { INPUT_MESSAGE, CAR_NAME_LENGTH, ERROR_MESSAGE };
