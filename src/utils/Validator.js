import { ERROR_PREFIX, SERVICE_CONSTSANSTS } from '../assets/constants';

export class Validator {
  static isEmptyString(string) {
    if (string == '')
      throw new Error(`${ERROR_PREFIX} 자동차 이름이 입력되지 않았습니다.`);
  }

  static hasDuplicatedName(carNameArr) {
    if (new Set(carNameArr).size != carNameArr.length)
      throw new Error(`${ERROR_PREFIX} 같은 이름을 가진 자동차가 존재합니다.`);
  }

  static isOverMinmalNumberOfCar(carNameArr) {
    if (carNameArr.length < SERVICE_CONSTSANSTS.MINIMAL_CAR_COUNT)
      throw new Error(
        `${ERROR_PREFIX} 경주를 위해 ${SERVICE_CONSTSANSTS.MINIMAL_CAR_COUNT}대 이상의 자동차가 필요합니다.`,
      );
  }

  static isSatisfiedCarNameLength(carNameArr) {
    carNameArr.forEach((name) => {
      if (
        name.length > SERVICE_CONSTSANSTS.MAXIMAL_CAR_NAME_LENGTH ||
        name.length < SERVICE_CONSTSANSTS.MINIMAL_CAR_NAME_LENGTH
      ) {
        throw new Error(
          `${ERROR_PREFIX} 자동차의 이름은 ${SERVICE_CONSTSANSTS.MINIMAL_CAR_NAME_LENGTH}~${SERVICE_CONSTSANSTS.MAXIMAL_CAR_NAME_LENGTH}글자로 작성되어야 합니다.`,
        );
      }
    });
  }

  static isNumber(tryCount) {
    if (isNaN(tryCount))
      throw new Error(`${ERROR_PREFIX} 숫자만 입력해주세요.`);
  }

  static isPositiveInteger(tryCount) {
    if (tryCount < 0)
      throw new Error(`${ERROR_PREFIX} 0보다 큰 수를 입력해주세요.`);
  }
}
