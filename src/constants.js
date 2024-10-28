const CAR_NAME_DELIMITER = ',';

const RANDOM_NUMBER_START = 0;
const RANDOM_NUMBER_END = 9;

const MOVE_FORWARD_THRESHOLD = 4;

const CAR_NAME_MAX_LENGTH = 5;

const INPUT_PROMPTS = {
  ENTER_CAR_NAMES:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  ENTER_ATTEMPT_COUNT: '시도할 횟수는 몇 회인가요?\n',
};

const ERROR_MESSAGES = {
  NAME_TOO_LONG: '[ERROR] 자동차 이름은 5자 이하만 가능합니다.',
  NAME_DUPLICATE: '[ERROR] 자동차 이름은 중복되지 않아야 합니다.',
  MUST_OVERRIDE_METHOD: '() 메서드는 반드시 오버라이딩 되어야 합니다.',
  CANNOT_INSTANTIATE_ABSTRACT_CLASS:
    '는 인스턴스화할 수 없는 추상 클래스입니다.',
};

const OUTPUT_PROMPTS = {
  EXECUTION_RESULT: '\n실행 결과',
  FINAL_WINNER_ANNOUNCEMENT: '최종 우승자 : ',
};

export {
  CAR_NAME_DELIMITER,
  RANDOM_NUMBER_START,
  RANDOM_NUMBER_END,
  MOVE_FORWARD_THRESHOLD,
  CAR_NAME_MAX_LENGTH,
  INPUT_PROMPTS,
  ERROR_MESSAGES,
  OUTPUT_PROMPTS,
};
