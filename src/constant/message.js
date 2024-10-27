import { CONFIG } from './config.js';

export const INPUT_MESSAGE = Object.freeze({
  CAR_NAME_LIST_INPUT:
    '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분)\n',
  TURN_COUNT_INPUT: '시도할 횟수는 몇 회인가요?\n',
});

export const OUTPUT_MESSAGE = Object.freeze({
  POSITION_SYMBOL: '-',
  RACE_RESULT: '\n실행결과',
  WINNER: '최종 우승자 : ',
});

const ERROR_MESSAGE_PREFIX = '[ERROR]';

export const ERROR_MESSAGE = Object.freeze({
  CAR_ALREADY_EXISTS: `${ERROR_MESSAGE_PREFIX} 자동차 이름은 중복될 수 없습니다.`,
  INVALID_CAR_NAME: `${ERROR_MESSAGE_PREFIX} 자동차 이름은 ${CONFIG.MIN_CAR_NAME_LENGTH}자 이상 ${CONFIG.MAX_CAR_NAME_LENGTH}자 이하여야 합니다.`,
  MIN_CARS_REQUIRED: `${ERROR_MESSAGE_PREFIX} 자동차는 최소 ${CONFIG.MIN_CAR_LIST_LENGTH}대 이상이어야 합니다.`,
  INVALID_TURN_COUNT: `${ERROR_MESSAGE_PREFIX} 시도 횟수는 ${CONFIG.MIN_TURN_COUNT}에서 ${CONFIG.MAX_TURN_COUNT} 사이의 수여야 합니다.`,
});
