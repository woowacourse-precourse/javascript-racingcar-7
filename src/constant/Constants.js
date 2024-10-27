const MESSAGES = {
  PROMPT: {
    GET_CAR_NAMES: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    GET_MOVE_TIMES: '시도할 횟수는 몇 회인가요?',
  },
  OUTPUT_WINNER: '최종 우승자 : ',
  ERROR: {
    CAR: {
      INVALID_NAME_LENGTH: '[ERROR] 자동차의 이름은 5자 이하로 부여해야 합니다.',
      INVALID_DUPLICATED_NAME: '[ERROR] 자동차의 이름은 중복해서 부여할 수 없습니다.',
      INVALID_EMPTY_NAME: '[ERROR] 자동차에 빈 이름을 부여할 수 없습니다.',
    },
    TIME: {
      INVALID_EMPTY_TIME: '[ERROR] 시도할 횟수를 입력해야 합니다.',
      INVALID_TIME_TYPE: '[ERROR] 시도할 횟수에 숫자를 입력해야 합니다.',
      INVALID_NEGATIVE_TIME: '[ERROR] 시도할 횟수에 음수를 적을 수 없습니다.',
      INVALID_TIME_SIZE: '[ERROR] 시도할 최대 횟수를 넘는 수를 입력할 수 없습니다.',
    },
  },
};

const MAX_MOVE_TIMES = Number.MAX_VALUE;

export { MESSAGES, MAX_MOVE_TIMES };
