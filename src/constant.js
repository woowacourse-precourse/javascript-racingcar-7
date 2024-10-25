export const errorMessages = Object.freeze({
  prefix: '[ERROR]',
  unexpectedError: '예상치 못한 에러가 발생하였습니다.',
  invalidDelimiter: '쉼표(,)로 구분된 이름을 입력해주세요.',
  invalidCarInputName: '자동차 이름은 한글, 영문 대소문자만 가능합니다.',
  invalidCarNameLength: '자동차 이름은 5자 이하만 가능합니다.',
  invalidCount: '시도 횟수는 1 이상의 정수만 입력 가능합니다.',
});

export const regex = Object.freeze({
  validInputName: /^[가-힣a-zA-Z]+(?:,[가-힣a-zA-Z]+)*$/,
  invalidCarInputDelimiter: /^[가-힣a-zA-Z]+(?:[^,][가-힣a-zA-Z]+)*$/,
  invalidCountInput: /[^1-9]/,
});
