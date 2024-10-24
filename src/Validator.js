class Validator {
  static ERROR_MSG = Object.freeze({
    INVALID_INPUT_DATA: '[ERROR] 입력 오류가 발생했어요.',
    EXSIT_WHITE_SPACE: "[ERROR] 공백(space, ' ')은 허용하지 않아요.",
    EXCEED_CAR_NAME_COUNT:
      '[ERROR] 자동차 이름은 10,000개 이하로 입력되어야 해요.',
    EXCEED_CAR_NAME_LENGTH: '[ERROR] 자동차 이름은 5자 이하로 설정되어야 해요.',
    DUPLICATE_CAR_NAME:
      '[ERROR] 자동차 이름이 중복되었어요! 이름이 중복되지 않게 설정해주세요.',
    NEGATIVE_GAME_COUNT:
      '[ERROR] 음수가 입력 되었어요! 경기 횟수는 1 이상 N이하로 설정되어야 합니다.',
    ZERO_GAME_COUNT:
      '[ERROR] 0이 입력 되었어요! 경기 횟수는 1 이상 N 이하로 설정되어야 합니다.',
    EXCEED_GAME_COUNT:
      '[ERROR] 숫자가 너무 큽니다! 경기 횟수는 1 이상 N 이하로 설정되어야 합니다.',
    CAHR_GAME_COUNT: '[ERROR] 경기횟수는 숫자로만 지정해주세요',
  });

  static REGEXP = Object.freeze({
    IS_NUMBER: /^[-+]?(\d+|Infinity)$/,
    ESCAPE: /[.*+?^${}()|[\]\\]/g,
  });

  static MAX_GAME_COUNT = 10000;

  static isInvalid(string) {
    if (
      string === undefined ||
      string === 'undefined' ||
      string === null ||
      string === 'null' ||
      string === '' ||
      string.length === 0
    ) {
      throw Error(this.ERROR_MSG.INVALID_INPUT_DATA);
    }
  }

  static existWriteSpace(string) {
    if (string.includes(' ')) {
      throw Error(this.ERROR_MSG.EXSIT_WHITE_SPACE);
    }
  }

  static isDuplicate(arr) {
    if (new Set(arr).size !== arr.length) {
      throw Error(this.ERROR_MSG.DUPLICATE_CAR_NAME);
    }
  }

  static exceedMaxLength(string) {
    if (string.length > 5) {
      throw Error(this.ERROR_MSG.EXCEED_CAR_NAME_LENGTH);
    }
  }

  static isChar(string) {
    if (this.REGEXP.IS_NUMBER.test(string) === false)
      throw Error(this.ERROR_MSG.CAHR_GAME_COUNT);
  }

  static isNagative(string) {
    if (parseInt(string, 10) < 0)
      throw Error(this.ERROR_MSG.NEGATIVE_GAME_COUNT);
  }

  static isZero(string) {
    if (parseInt(string, 10) === 0) throw Error(this.ERROR_MSG.ZERO_GAME_COUNT);
  }

  static exceedMaxCount(string) {
    if (parseInt(string, 10) > this.MAX_GAME_COUNT)
      throw Error(this.ERROR_MSG.EXCEED_GAME_COUNT);
  }
}

export default Validator;
