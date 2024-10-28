import { MAX_NAME_LENGTH, MIN_ATTEMPT_COUNT } from "./Constants.js";

export const PRINT_WINNER_MESSAGE = '최종 우승자 : ';
export const INPUT_ATTEMPT_COUNT_MESSAGE = '시도할 횟수는 몇 회인가요? ';
export const INPUT_NAME_MESSAGE = '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) ';

const errorPrefix = '[ERROR]';
export const INPUT_ERROR_MESSAGE = `${errorPrefix} 공백 입력은 불가합니다.`;
export const NAN_ERROR_MESSAGE = `${errorPrefix} 시도 횟수는 숫자입니다.`;
export const ATTEMPT_COUNT_ERROR_MESSAGE = `${errorPrefix} 시도 횟수를 ${MIN_ATTEMPT_COUNT}이상 숫자로 입력해주세요.`;
export const SEPARATOR_ERROR_MESSAGE = `${errorPrefix} 이름은 쉼표(,) 기준으로 구분해야 합니다.`;
export const OVER_NAME_LENGTH_ERROR_MESSAGE = `${errorPrefix} 이름은 ${MAX_NAME_LENGTH}자 이하만 가능합니다.`;
export const INVALID_CAR_ERROR_MESSAGE = `${errorPrefix} 자동차가 존재하지 않습니다.`;
