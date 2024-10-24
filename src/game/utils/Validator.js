export default class Validator {
  static validateCarNameWhitespace(carNamesArray) {
    carNamesArray.forEach((carName) => {
      if (carName.trim() == '') {
        throw new Error('[ERROR] 자동차 이름에 공백을 입력하였습니다.');
      }
    });
  }

  static validateCarNameLength(carNamesArray) {
    carNamesArray.forEach((carName) => {
      if (carName.length >= 6) {
        throw new Error('[ERROR] 자동차 이름이 6자 이상입니다.');
      }
    });
  }

  static validateDuplicateCarName(carNamesArray) {
    const carsNameCheckArray = [];

    carNamesArray.forEach((carName) => {
      if (carsNameCheckArray.includes(carName.trim())) {
        throw new Error(`[ERROR] ${carName.trim()}는 중복되는 이름입니다.`);
      }
      carsNameCheckArray.push(carName.trim());
    });
  }

  static validateAttemptCount(attemptCount){
    const isValidate = new RegExp('^\\d+$').test(attemptCount)
    if(!isValidate || Number(attemptCount)===0){
        throw new Error('[ERROR] 시도할 횟수는 양의 정수를 입력해주세요.');
    }
  }
}
