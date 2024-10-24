import RULES from "./rule.js";

export const MESSAGES = Object.freeze({
  INPUT_CAR_NAMES: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  INPUT_TRIAL_COUNT: "시도할 횟수는 몇 회인가요?\n",
  PRINT_WINNERS: "\n최종 우승자 : ",
});

export const ERROR_MESSAGES = Object.freeze({
  PREFIX: "[ERROR] ",
  OVER_CAR_NAME_LENGTH: `자동차 이름은 ${RULES.CAR_NAME_MAX_LENGTH}자 이내만 입력 가능합니다.`,
  NO_DUPLICATE: "자동차 이름은 중복될 수 없습니다.",
  NO_BLANK: "자동차 이름에 공백이 포함되어 있습니다.",
  NOT_NUMBER: "시도 횟수는 숫자만 입력 가능합니다.",
  NOT_NEGATIVE: "음수는 입력할 수 없습니다.",
});
