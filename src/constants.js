const QUERIES = Object.freeze({
  'CAR_NAMES': '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
});

const ERROR_HEAD = '[ERROR]';

const ERROR_DETAILS = Object.freeze({
  'CARNAMES_NOT_ARRAY': `${ERROR_HEAD}: carNames must be an array.`,
  'CARNAMES_EMPTY': `${ERROR_HEAD}: carNames must not be empty.`,
  'CARNAMES_NOT_STRING': `${ERROR_HEAD}: carName must be a string.`,
  'CARNAME_EMPTY': `${ERROR_HEAD}: carName must not be empty.`,
  'CARNAMES_DUPLICATE': `${ERROR_HEAD}: carNames must not have duplicates.`,
});

export {
  QUERIES,
  ERROR_DETAILS,
  ERROR_HEAD,
};
