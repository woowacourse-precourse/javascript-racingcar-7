export const MESSAGE = {
  // 출력 메시지
  CARNAME_INPUT:
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  TRYCOUNT_INPUT: "시도할 회수는 몇회인가요?\n",
  ERROR: "[ERROR]",
};

export const ERROR_MESSAGE = {
  EMPTY_NAME: `${MESSAGE.ERROR} 자동차 이름이 입력되지 않았습니다.`,
  DUPLICATE_NAME: `${MESSAGE.ERROR} 자동차 이름이 중복되었습니다.`,
  OVER_LENGTH_NAME: `${MESSAGE.ERROR}} 자동차 이름이 5글자를 초과합니다.`,
  SPACE_NAME: `${MESSAGE.ERROR} 자동차 이름에 공백이 존재합니다.`,
  INVALID_CHAR_NAME: `${MESSAGE.ERROR} 올바르지 않은 문자가 포함되어 있습니다.`,

  INVALID_TRYCOUNT: `${MESSAGE.ERROR} 시도횟수가 1보다 작습니다.`,
  EMPTY_TRYCOUNT: `${MESSAGE.ERROR} 시도횟수가 입력되지 않았습니다.`,
  NOT_NUMBER_TRYCOUNT: `${MESSAGE.ERROR} 시도횟수가 숫자가 아닙니다.`,
};
