import {
  MAX_CAR_COUNT,
  MIN_CAR_NAME_LEN,
  MAX_CAR_NAME_LEN,
  MIN_TRY_COUNT,
  MAX_TRY_COUNT,
} from './constants.js';

const PRINT_MESSAGES = {
  INPUT: {
    CAR_NAME: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    TRY_COUNT: '시도할 횟수는 몇 회인가요?',
  },
  OUTPUT: {
    RESULT: '실행 결과',
    WINNER: '최종 우승자',
  },
};

const ERROR_MESSAGE = {
  INVALID_CAR_INPUT:
    '[ERROR] 자동차 이름은 알파벳과 숫자로만 구성되고 이름들은 쉼표(,)로 구분되어야 합니다.',
  INVALID_CAR_NAME_LENGTH: `[ERROR] 자동차의 이름은 ${MIN_CAR_NAME_LEN}자 이상 ${MAX_CAR_NAME_LEN}자 이하로 구성되어야 합니다.`,
  DUPLICATE_NAME: '[ERROR] 중복된 자동차 이름은 허용되지 않습니다.',
  INVALID_NUMBER_INPUT: '[ERROR] 시도 횟수는 숫자만 입력 가능합니다.',
  INVALID_NUMBER_RANGE: `[ERROR] 시도 횟수는 ${MIN_TRY_COUNT}이상 ${MAX_TRY_COUNT}이하의 숫자만 입력 가능합니다.`,
  NULL_INPUT: '[ERROR] 입력값이 비어 있습니다. 값을 입력해 주세요.',
  LIMIT_CAR_COUNT: `[ERROR] 자동차 개수는 최대 ${MAX_CAR_COUNT}대를 초과할 수 없습니다.`,
};

const GUIDE_MESSAGE = {
  HEADER: '----------[자동차 경주 게임 안내]----------',
  INTRO:
    '게임 설명: 자동차 이름과 시도 횟수를 입력하고 가장 멀리 전진한 자동차가 우승하는 게임입니다!\n',
  NAME_RULE_1:
    '- 자동차 이름은 쉼표(,)로 구분하여 알파벳과 숫자로 입력 가능합니다.',
  NAME_RULE_2: '- 이름은 1~5자 이내, 최대 100대까지 입력 가능합니다.',
  NAME_RULE_3: '- 자동차의 이름은 중복이 불가합니다.',
  TRY_COUNT_RULE: '- 시도 횟수는 1~1000 사이의 숫자로 입력 가능합니다.',
  MOVE_RULE:
    '- 매 시도마다 0부터 9 사이의 무작위 값이 나오며 4 이상이면 1칸 전진합니다.',
  WINNER_RULE: '- 가장 멀리 전진한 자동차가 최종 우승합니다.',
  FOOTER: '------------------------------------------\n',
};
export { PRINT_MESSAGES, ERROR_MESSAGE, GUIDE_MESSAGE };
