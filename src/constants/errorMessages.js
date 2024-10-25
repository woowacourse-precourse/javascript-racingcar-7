const ERROR_MESSAGES = {
  PREFIX: '[ERROR]',
  INVALID_FORMAT: '입력 형식이 올바르지 않습니다. 쉼표(,)로만 구분해주세요.',
  NAME_LENGTH_EXCEEDED: '자동차 이름은 5자 이하만 가능합니다.',
  NAME_INVALID_CHARACTERS: '자동차 이름은 한글과 영어만 가능합니다.',
  NAME_EMPTY: '자동차 이름은 공백일 수 없습니다.',
  NAME_DUPLICATE: '자동차 이름이 중복되었습니다.',
  MINIMUM_CARS: '자동차는 최소 2대 이상이어야 합니다.',
  POSITIVE_INTEGER_REQUIRED: '게임 시도 횟수는 양의 정수만 입력 가능합니다.',
  ROUND_LIMIT_EXCEEDED: (maxRounds) =>
    `게임 시도 횟수는 ${maxRounds} 이하만 가능합니다.`,
  INVALID_NUMBER_INPUT: '숫자 이외의 문자가 입력되었습니다.',
};

export default ERROR_MESSAGES;
