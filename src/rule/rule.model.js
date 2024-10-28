import { Random } from '@woowacourse/mission-utils';

import {
  isIntegerNumericString,
  isLengthLessThan,
  isNotEmptyString,
  isNumericString,
  isPositiveNumericString,
} from '../lib/utils.js';
import Validator from '../lib/Validator.js';

export class RuleModel {
  /** @type {Validator} */
  #validator;

  static ERROR_MESSAGE = Object.freeze({
    INPUT_CAN_NOT_BE_EMPTY: '[ERROR] 빈 값은 입력할 수 없어요',
    CAR_NAME_LENGTH_IS_LESS_THAN_FIVE: '[ERROR] 자동차 이름은 5자 이하만 가능해요',
    TRIAL_NUMBER_IS_POSITIVE_INTEGER: '[ERROR] 시도할 횟수는 양의 정수만 입력할 수 있어요',
  });

  static GAME_RULE = Object.freeze({
    MOVE_FORWARD_CONDITION: {
      RANGE_START: 0,
      RANGE_END: 9,
      CAN_MOVE_FORWARD: 4,
    },
  });

  /**
   *
   * @param {Validator} validator
   */
  constructor(validator) {
    this.#validator = validator;
  }

  /**
   *
   * @param {string} input
   * @returns {boolean}
   */
  #isNotEmpty(input) {
    return isNotEmptyString(input);
  }

  /**
   *
   * @param {string} carName
   * @returns {boolean}
   */
  #isCarNameLengthLessThanFive(carName) {
    return isLengthLessThan(carName, 5);
  }

  /**
   *
   * @param {Array<string>} carNames
   * @returns {boolean}
   */
  #isCarNamesLengthLessThanFive(carNames) {
    return carNames.every((carName) => this.#isCarNameLengthLessThanFive(carName));
  }

  /**
   *
   * @param {string} carNames
   * @returns {Array<string>}
   */
  parseCarNames(carNames) {
    return carNames
      .split(',')
      .map((carName) => carName.trim())
      .filter((carName) => carName !== '');
  }

  /**
   *
   * @param {string} carNames
   * @throws {Error}
   */
  validateCarNames(carNames) {
    this.#validator
      .validate(carNames)
      .with(this.#isNotEmpty, { message: RuleModel.ERROR_MESSAGE.INPUT_CAN_NOT_BE_EMPTY })
      .validate(this.parseCarNames(carNames))
      .with(this.#isCarNamesLengthLessThanFive.bind(this), {
        message: RuleModel.ERROR_MESSAGE.CAR_NAME_LENGTH_IS_LESS_THAN_FIVE,
      });
  }

  /**
   *
   * @param {string} trialNumber
   * @returns {boolean}
   */
  #isPositiveInteger(trialNumber) {
    return (
      isNumericString(trialNumber) &&
      isIntegerNumericString(trialNumber) &&
      isPositiveNumericString(trialNumber)
    );
  }

  /**
   *
   * @param {string} trialNumber
   * @throws {Error}
   */
  validateTrialNumber(trialNumber) {
    this.#validator
      .validate(trialNumber)
      .with(this.#isNotEmpty, { message: RuleModel.ERROR_MESSAGE.INPUT_CAN_NOT_BE_EMPTY })
      .with(this.#isPositiveInteger, {
        message: RuleModel.ERROR_MESSAGE.TRIAL_NUMBER_IS_POSITIVE_INTEGER,
      });
  }

  /**
   *
   * @returns {number}
   */
  #generateRandomNumber() {
    return Random.pickNumberInRange(
      RuleModel.GAME_RULE.MOVE_FORWARD_CONDITION.RANGE_START,
      RuleModel.GAME_RULE.MOVE_FORWARD_CONDITION.RANGE_END,
    );
  }

  /**
   *
   * @returns {boolean}
   */
  canMoveForward() {
    return (
      this.#generateRandomNumber() >= RuleModel.GAME_RULE.MOVE_FORWARD_CONDITION.CAN_MOVE_FORWARD
    );
  }
}
