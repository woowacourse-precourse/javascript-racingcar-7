/** 에러 메시지 관리
 *
 * @type {Readonly<{EMPTY_ATTEMPTS: string, EMPTY_CAR_NAME: string,
 *        NEGATIVE_ATTEMPTS: string, LENGTH_OVER_CAR_NAME: string,
 *        NAN_ATTEMPTS: string, ZERO_ATTEMPTS: string}>}
 */
export const ERROR_MESSAGES = Object.freeze(
  {
    EMPTY_CAR_NAME: "[ERROR] : 자동차 이름은 공백일 수 없습니다. ",
    LENGTH_OVER_CAR_NAME: "[ERROR] : 자동차 이름은 5자 이하만 가능합니다.",
    DUPLICATE_CAR_NAME: "[ERROR] : 자동차 이름은 중복될 수 없습니다.",
    EMPTY_ATTEMPTS: "[ERROR] : 시도 횟수는 공백일 수 없습니다.",
    NEGATIVE_ATTEMPTS: "[ERROR] : 시도 횟수는 양수만 가능합니다.",
    NAN_ATTEMPTS: "[ERROR] : 시도 횟수는 숫자만 가능합니다.",
    ZERO_ATTEMPTS: "[ERROR] : 시도 횟수는 0이 불가능합니다.",

  }
)
