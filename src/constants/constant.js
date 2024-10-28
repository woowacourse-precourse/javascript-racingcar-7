const INPUT_MESSAGE = Object.freeze({
  carNames: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
  attemptCount: '시도할 횟수는 몇 회인가요?',
});

const OUTPUT_MESSAGE = Object.freeze({
  result: '실행 결과',
});

const CAR_NAME_LENGTH = Object.freeze({
  minRange: 1,
  maxRange: 5,
});

const ERROR_MESSAGE = Object.freeze({
  carNameError: '[ERROR] 이름은 5자 이하로 적어주세요.',
  numberError: '[ERROR] 숫자가 아닌 형식입니다. 다시 입력해주세요.',
});

const RANDOM_NUMBER = Object.freeze({
  minRange: 0,
  maxRange: 9,
  minNumber: 4,
});

export {
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  CAR_NAME_LENGTH,
  ERROR_MESSAGE,
  RANDOM_NUMBER,
};
