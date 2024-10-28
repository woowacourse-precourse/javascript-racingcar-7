/**
 * 자동차 경주 게임에서 발생할 수 있는 다양한 오류 메시지를 정의한다.
 *
 * @constant {Object} ERROR_MESSAGES
 * @property {string} PREFIX - 모든 오류 메시지에 붙는 접두사 `[ERROR]`
 * @property {string} INVALID_FORMAT - 입력 형식이 올바르지 않을 때의 메시지
 * @property {string} NAME_LENGTH_EXCEEDED - 자동차 이름이 5자를 초과할 때의 메시지
 * @property {string} NAME_INVALID_CHARACTERS - 허용되지 않는 문자가 포함된 경우의 메시지
 * @property {string} NAME_EMPTY - 자동차 이름이 비어 있을 때의 메시지
 * @property {string} NAME_DUPLICATE - 자동차 이름이 중복될 때의 메시지
 * @property {string} MINIMUM_CARS - 최소 2대 이상의 자동차가 필요할 때의 메시지
 * @property {string} POSITIVE_INTEGER_REQUIRED - 시도 횟수가 양의 정수가 아닐 때의 메시지
 * @property {Function} ROUND_LIMIT_EXCEEDED - 최대 시도 횟수를 초과할 때의 메시지 생성 함수
 * @property {string} INVALID_NUMBER_INPUT - 숫자가 아닌 값이 입력되었을 때의 메시지
 */
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
