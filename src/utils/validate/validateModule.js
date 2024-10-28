import { SERVICE_CONSTSANSTS } from '../../assets/constants.js';
import { Validator } from './Validator.js';

export class ValidateModule {
  static validateCarName(value) {
    Validator.isEmptyString(value);
    const carNameArr = value.split(SERVICE_CONSTSANSTS.DELIMITER);

    Validator.hasDuplicatedName(carNameArr);
    Validator.isOverMinmalNumberOfCar(carNameArr);
    Validator.isSatisfiedCarNameLength(carNameArr);
  }

  static validateTryAttemptionNumber(value) {
    const num = Number(value);
    Validator.isNumber(num);
    Validator.isInteger(num);
    Validator.isPositive(num);
  }
}
