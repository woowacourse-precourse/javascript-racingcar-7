import { CONSOLE_OPTIONS } from '../constant/option.js';
import ValidationError from '../error/ValidationError.js';

export function isValidDelimiter(input) {
  const splitResult = input.split(CONSOLE_OPTIONS.CAR_NAME_DELIMITER);

  if (splitResult.length === 1 || !splitResult.length) {
    throw new ValidationError(
      `자동차 이름 양식이 유효하지 않거나 자동차 이름이 1개 이하입니다.`
    );
  }
}

export function isValidCarNameLength(input) {
  const splitResult = input
    .split(CONSOLE_OPTIONS.CAR_NAME_DELIMITER)
    .map((str) => str.trim());

  splitResult.forEach((str) => {
    if (str.length > CONSOLE_OPTIONS.CAR_NAME_MAX_LENGTH || !str.length) {
      throw new ValidationError(
        `자동차 이름은 1자 이상 ${CONSOLE_OPTIONS.CAR_NAME_MAX_LENGTH}자 이하로 입력해야 합니다.`
      );
    }
  });
}

export function isCarNameDuplicated(input) {
  const splitResult = input.split(CONSOLE_OPTIONS.CAR_NAME_DELIMITER);
  const carNameSet = new Set(splitResult);

  if (splitResult.length !== carNameSet.size) {
    throw new ValidationError('중복된 자동차 이름은 입력할 수 없습니다.');
  }
}

export function isValidTryCount(input) {
  if (Number(input) < 0 || !Number(input)) {
    throw new ValidationError('시도 횟수는 양의 정수 형태로 입력해주세요.');
  }
}
