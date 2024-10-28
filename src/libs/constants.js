export const INFO_MESSAGE = Object.freeze({
  QUESTION_CARS_NAME: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  QUESTION_TRAIL: "시도할 횟수는 몇 회인가요?\n",
  ANSWER_FINAL_WINNER: "최종 우승자 : ",
});
export const ERROR_MESSAGE = Object.freeze({
  INVALID_DELIMITER: "자동차 이름은 쉼표(,)를 기준으로 구분합니다",
  INVALID_CAR_AMOUNT: "자동차 2 대이상어야지 경기를 시작할 수 있습니다.",
  INVALID_NAME_LENGTH: "이름은 5자 이하만 가능합니다.",
  INVALID_ROUND: "경주 시도 횟수는 적어도 1회 이상입니다.",
  INVALID_INPUT_TYPE: "잘못된 타입의 입력입니다.",
  EMPTY_INPUT: "입력해주세요.",
});

export const CARS_NAME_REGEXP = /[,]/g;
