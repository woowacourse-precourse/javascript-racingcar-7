export const INPUT_MESSAGE = {
  carName : "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n" ,
  numberOfAttempts : "시도할 횟수는 몇 회인가요?\n" ,
};

export const OUTPUT_MESSAGE = {
  executionResult : "\n실행 결과" ,
  finalWinner : "최종 우승자 : " ,
};

export const MOVE_CONDITION = {
  minRange : 0,
  maxRange : 9,
  condition : 4,
  move : 1,
}

const ERROR_PREFIX = "[ERROR]";

export const ERROR_MESSAGE = {
  invalidNameRangeError : `${ERROR_PREFIX} 자동차 이름은 5자 이하만 가능합니다.`,
  invalidNameError : `${ERROR_PREFIX} 유효한 자동차 이름이 아닙니다.`,
  invalidAttemptsError : `${ERROR_PREFIX} 유효한 시도값이 아닙니다.`,
};