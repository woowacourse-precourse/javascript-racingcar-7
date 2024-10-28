const ERROR_TAG = '[ERROR]';

const ERROR = {
  EMPTY_CAR_NAMES: {
    name: 'EmptyCarNamesError',
    message: `${ERROR_TAG} 최소 하나 이상의 자동차 이름을 입력해야 합니다.`,
  },
  INVALID_CAR_NAMES: {
    name: 'InvalidCarNamesError',
    message: `${ERROR_TAG} 자동차 이름은 1자 이상 5자 이하의 문자열이어야 합니다.`,
  },

  EMPTY_ROUND_COUNT: {
    name: 'EmptyRoundCountError',
    message: `${ERROR_TAG} 시도 횟수를 입력해야 합니다.`,
  },
  NAN_ROUND_COUNT: {
    name: 'NaNRoundCountError',
    message: `${ERROR_TAG} 시도 횟수는 숫자여야 합니다.`,
  },
  NEGATIVE_ROUND_COUNT: {
    name: 'NegativeRoundCountError',
    message: `${ERROR_TAG} 시도 횟수는 음수가 아닌 1 이상의 정수여야 합니다.`,
  },
  INVALID_ROUND_COUNT: {
    name: 'InvalidRoundCountError',
    message: `${ERROR_TAG} 시도 횟수는 1 이상의 정수여야 합니다.`,
  },
};

export default ERROR;
