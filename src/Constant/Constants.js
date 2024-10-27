export const VIEW_MSG = Object.freeze({
  INPUT_CAR_NAME:
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)",
  INPUT_NUM_OF_ATTEMPTS: "시도할 횟수는 몇 회인가요?",
  OUTPUT_RESULT: "실행 결과",
  OUTPUT_WINNER: "최종 우승자 : ",
});

export const ERROR_MSG = Object.freeze({
  ERROR_INPUT_NUM_CAR:
    "[ERROR] 자동차 경주 게임에는 최소 2개 이상의 자동차가 필요합니다. 구분자를 사용해서 자동차 이름을 2개 이상 넣어주세요!",
  ERROR_INPUT_CAR_COMMA:
    '[ERROR] ","로 시작하는 자동차 이름은 사용할 수 없습니다!',
  ERROR_INPUT_CAR_NAME_LENGTH:
    "[ERROR] 자동차 이름의 길이는 5를 넘을 수 없습니다. 다시 입력해주세요!",
  ERROR_INPUT_WITH_ATTEMPTS:
    "[ERROR] 시도활 횟수는 숫자만 입력 가능합니다. 다시 확인해주세요!",
});
