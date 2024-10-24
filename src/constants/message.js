const INPUT_MESSAGE = Object.freeze({
  carName: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  attemptNumber: "시도할 횟수는 몇 회인가요?\n",
});

const OUTPUT_MESSAGE = Object.freeze({
  winner: "최종 우승자 : ",
  racingResult: "실행 결과",
});

const PREFIX_ERROR = "[ERROR]";

const ERROR_MESSAGE = Object.freeze({
  blank: `${PREFIX_ERROR} 값을 입력해주십시오.`,
  onlyRacer: `${PREFIX_ERROR} 최소 2대부터 경주가 가능합니다.`,

  carName: {
    invalidLength: `${PREFIX_ERROR} 자동차 이름은 5글자 이내입니다.`,
    invalidOverlap: `${PREFIX_ERROR} 자동차 이름이 중복됩니다.`,
    invalidSeparator: `${PREFIX_ERROR} ,로만 구분해야 합니다.`,
  },

  attemptNumber: {
    invalidType: `${PREFIX_ERROR} 숫자를 입력해주십시오.`,
    invalidInteger: `${PREFIX_ERROR} 양의 정수를 입력해주십시오.`,
  },
});

export { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE };
