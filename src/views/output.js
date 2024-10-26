import { MissionUtils } from '@woowacourse/mission-utils';

function formatWinnerNames(winners) {
  return winners
    .map((car) => car.getCarName())
    .sort()
    .join(', ');
}

function formatRaceProgress(cars) {
  return cars
    .map((car) => `${car.getCarName()} : ${'-'.repeat(car.getPosition())}`)
    .join('\n');
}

export function printRaceProgress(cars) {
  const raceProgress = formatRaceProgress(cars);
  return MissionUtils.Console.print(`${raceProgress}\n`);
}

export function printResult(winners) {
  return MissionUtils.Console.print(
    `최종 우승자 : ${formatWinnerNames(winners)}`,
  );
}
