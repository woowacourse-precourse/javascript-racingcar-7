import { Random } from "@woowacourse/mission-utils";

/**
 * 객체를 반복하며 최소값에서 최대값 사이 랜덤한 값을 뽑아,
 * 기준값보다 크면 1점을 추가하는 함수입니다.
 *
 * @param {Object} carList - 자동차 이름이 key, 점수가 value로 이루어진 객체
 * @returns {Object} 자동차 별 점수를 업데이트한 객체
 */
export function calculateRandomScores(carList) {
  const MIN_NUMBER = 0;
  const MAX_NUMBER = 9;
  const STANDARD_NUMBER = 4;

  Object.keys(carList).forEach((carName) => {
    if (Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER) >= STANDARD_NUMBER)
      carList[carName] += 1;
  });

  return carList;
}

/**
 *
 * 주어진 점수 객체를 기반으로 최고 점수를 찾고,
 * 해당 점수를 가진 자동차의 이름을 반환합니다.
 *
 * @param {Object} carList - 자동차 이름이 key, 점수가 value로 이루어진 객체
 * @returns {Array<string>} 우승한 자동차의 이름을 가진 배열입니다.
 */
export function findWinner(carList) {
  const maxScore = Math.max(...Object.values(carList));

  const winnerList = Object.entries(carList)
    .filter(([key, value]) => value === maxScore)
    .map(([key]) => key);

  return winnerList;
}
