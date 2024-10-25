export const COMMON_MESSAGE = {
  INPUT_CARS: Object.freeze(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
  ),
  INPUT_COUNT: Object.freeze("시도할 횟수는 몇 회인가요?\n"),
  EXECUTE: Object.freeze("실행 결과"),
  OUTPUT: Object.freeze("최종 우승자 :"),
};

const DEFAULT_ERROR_MESSAGE = "[ERROR]";
export const ERROR_MESSAGE = {
  CARS_NO_ENTERED: Object.freeze(
    `${DEFAULT_ERROR_MESSAGE} 자동차 이름을 입력해주세요!`
  ),
  CAR_NAME_LENGTH_OVER: Object.freeze(
    `${DEFAULT_ERROR_MESSAGE} 각각의 자동차 이름은 5자 이하로 입력해주세요!`
  ),
  DELIMITER_TWICE: Object.freeze(
    `${DEFAULT_ERROR_MESSAGE} 구분자를 연속 입력하였습니다!`
  ),
  DELIMITER_START_OR_END_ENTERED: Object.freeze(
    `${DEFAULT_ERROR_MESSAGE} 구분자는 자동차 이름 사이에 입력되어야 합니다!`
  ),
  COUNT_NO_ENTERED: Object.freeze(
    `${DEFAULT_ERROR_MESSAGE} 시도할 횟수를 입력해주세요!`
  ),
  COUNT_CHAR_ENTERED: Object.freeze(
    `${DEFAULT_ERROR_MESSAGE} 시도할 횟수에는 숫자를 입력해야합니다!`
  ),
  COUNT_POINT: Object.freeze(
    `${DEFAULT_ERROR_MESSAGE} 시도할 횟수에는 정수만 입력해주세요!`
  ),
  COUNT_NEGATIVE: Object.freeze(
    `${DEFAULT_ERROR_MESSAGE} 시도할 횟수에는 양의 정수만 입력해주세요!`
  ),
  NO_CHAMPION: Object.freeze(`${DEFAULT_ERROR_MESSAGE} 우승자가 없습니다!`),
};
