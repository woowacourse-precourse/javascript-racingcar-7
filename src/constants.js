const MESSAGE = {
  GAME_RESULT: "실행 결과",
  INPUT_NAME: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  INPUT_TRYCOUNT: "시도할 횟수는 몇 회인가요?\n",
  ERROR: "[ERROR]",

  ERROR: {
    TYPE: `${this.ERROR}이동횟수는 양의 정수로 입력해주세요.`,
    LENGTH: `${this.ERROR}자동차 이름은 5자 이하로 입력해주세요.`,
    BLANK: `${this.ERROR}자동차 이름을 입력해주세요.`,
    DUPLICATION: `${this.ERROR}서로 다른 이름을 입력해주세요.`,
    NUMBER_OF_INPUT: `${this.ERROR}두 대 이상의 자동차를 콤마(,)로 구분해서 입력해주세요.`,
  },
};

const NUMBER = {
  MAX_NAME_LENGTH: 5,
  MIN_NAME_COUNT: 2,
  MIN_TRYCOUNT: 1,
  MAX_TRYCOUNT: 100,
  END_INCLUSIVE: 9,
  START_INCLUSIVE: 0,
};

export { MESSAGE, NUMBER };
