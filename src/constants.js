export const MESSAGE = {
  // 출력 메시지
  CARNAME_INPUT:
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  ERROR: "[ERROR]",
};

export const ERROR_MESSAGE = {
  EMPTY_NAME: `${MESSAGE.ERROR} 자동차 이름이 입력되지 않았습니다.`,
  DUPLICATE_NAME: `${MESSAGE.ERROR} 자동차 이름이 중복되었습니다.`,
  OVER_LENGTH_NAME: `${MESSAGE.ERROR}} 자동차 이름이 5글자를 초과합니다.`,
  SPACE_NAME: `${MESSAGE.ERROR} 자동차 이름에 공백이 존재합니다.`,
};
