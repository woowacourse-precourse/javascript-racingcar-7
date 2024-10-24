import { MissionUtils } from '@woowacourse/mission-utils';

function formatRaceProgress(cars) {
  return cars
    .map((car) => `${car.name} : ${'-'.repeat(car.position)}`)
    .join('\n');
}

export default function printRaceProgress(cars) {
  const raceProgress = formatRaceProgress(cars);
  return MissionUtils.Console.print(`${raceProgress}\n`);
}
