// 게임의 인풋 아웃풋 메시지를 관리하는 파일
export const INPUT_MESSAGES = Object.freeze({
  PROMPT_CAR_NAMES:
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  PROMPT_ROUND_COUNT: "시도할 횟수는 몇 회인가요?\n",
});

export const OUTPUT_MESSAGES = Object.freeze({
  RESULT_MESSAGE: "\n실행 결과",
  WINNER_MESSAGE: "최종 우승자 : ",
});
