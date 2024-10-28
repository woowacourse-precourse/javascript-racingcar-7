/**
 * 자동차 경주 게임에서 자동차 이동 동작을 위한 설정 값입니다.
 *
 * @constant {Object} CAR_SETTINGS
 * @property {number} MIN_MOVE_THRESHOLD - 자동차가 전진하기 위한 최소 기준 값입니다.
 *                                         랜덤으로 생성된 숫자가 이 값 이상일 때만
 *                                         자동차가 전진합니다.
 * @property {number} MIN_RANDOM_VALUE - 랜덤 숫자의 최소 값입니다.
 * @property {number} MAX_RANDOM_VALUE - 랜덤 숫자의 최대 값입니다.
 */
const CAR_SETTINGS = {
  MIN_MOVE_THRESHOLD: 4,
  MIN_RANDOM_VALUE: 0,
  MAX_RANDOM_VALUE: 9,
};

export default CAR_SETTINGS;
