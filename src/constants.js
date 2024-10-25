const QUERIES = Object.freeze({
  'CAR_NAMES': '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
  'SECONDS': '시도할 횟수는 몇 회인가요?',
});

const ERROR_HEAD = '[ERROR]';

const ERROR_DETAILS = Object.freeze({
  'CARNAMES_NOT_ARRAY': `${ERROR_HEAD}: carNames must be an array.`,
  'CARNAMES_EMPTY': `${ERROR_HEAD}: carNames must not be empty.`,
  'CARNAMES_NOT_STRING': `${ERROR_HEAD}: carName must be a string.`,
  'CARNAME_EMPTY': `${ERROR_HEAD}: carName must not be empty.`,
  'CARNAME_LENGTH': `${ERROR_HEAD}: carName must be between 1 and 5 characters long.`,
  'CARNAMES_DUPLICATE': `${ERROR_HEAD}: carNames must not have duplicates.`,
  'SECONDS_NAN': `${ERROR_HEAD}: seconds must be a number.`,
  'SECONDS_NOT_SAFE_INTEGER': `${ERROR_HEAD}: seconds must be a safe integer.`,
  'SECONDS_NOT_POSITIVE': `${ERROR_HEAD}: seconds must be a positive number.`,
  'INVALID_SECOND': `${ERROR_HEAD}: Second must be a non-negative number less than or equal to the total number of seconds.`,
});

export {
  QUERIES,
  ERROR_DETAILS,
  ERROR_HEAD,
};
