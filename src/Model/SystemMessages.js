/**
 * 시스템 메시지를 정의한 객체로, 사용자에게 필요한 정보를 요청하는 메시지를 포함합니다.
 * 이 객체는 `Object.freeze`로 동결되어 있어 수정할 수 없습니다.
 *
 * @constant {Object} SYSTEM_MESSAGES
 * @property {string} ASK_ROUNDS - 사용자가 입력할 시도 횟수를 묻는 메시지입니다.
 * @property {string} ASK_CARS_NAME - 경주할 자동차 이름을 쉼표로 구분하여 입력하도록 요청하는 메시지입니다.
 *
 * @example
 * console.log(SYSTEM_MESSAGES.ASK_ROUNDS); // "시도할 횟수는 몇 회인가요?"
 * console.log(SYSTEM_MESSAGES.ASK_CARS_NAME); // "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
 */
const SYSTEM_MESSAGES = Object.freeze({
  ASK_ROUNDS: '시도할 횟수는 몇 회인가요?',
  ASK_CARS_NAME:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
});

export default SYSTEM_MESSAGES;
