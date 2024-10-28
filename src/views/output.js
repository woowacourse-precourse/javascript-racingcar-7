import { MissionUtils } from '@woowacourse/mission-utils';

/**
 * 우승자들의 이름을 형식화한다.
 *
 * @function formatWinnerNames
 * @param {Car[]} winners - 우승한 자동차 배열
 * @returns {string} 정렬된 우승자 이름 문자열
 */
function formatWinnerNames(winners) {
  return winners
    .map((car) => car.getCarName())
    .sort()
    .join(', ');
}

/**
 * 자동차의 경주 진행 상황을 형식화한다.
 *
 * @function formatRaceProgress
 * @param {Car[]} cars - 경주에 참가한 자동차 배열
 * @returns {string} 자동차들의 경주 진행 상황을 나타내는 문자열
 */
function formatRaceProgress(cars) {
  return cars
    .map((car) => `${car.getCarName()} : ${'-'.repeat(car.getPosition())}`)
    .join('\n');
}

/**
 * 경주 진행 상황을 출력한다.
 *
 * @function printRaceProgress
 * @param {Car[]} cars - 경주에 참가한 자동차 배열
 * @returns {void} 콘솔에 경주 진행 상황을 출력한다.
 */
export function printRaceProgress(cars) {
  const raceProgress = formatRaceProgress(cars);
  return MissionUtils.Console.print(`${raceProgress}\n`);
}

/**
 * 우승자를 출력한다.
 *
 * @function printResult
 * @param {Car[]} winners - 우승한 자동차 배열
 * @returns {void} 콘솔에 우승자를 출력한다.
 */
export function printResult(winners) {
  return MissionUtils.Console.print(
    `최종 우승자 : ${formatWinnerNames(winners)}`,
  );
}
