import { MissionUtils } from '@woowacourse/mission-utils';

function generateProgressBar(position) {
  return '-'.repeat(position);
}

function formatWinnerNames(names) {
  return names.map((name) => name).join(', ');
}

export function printCarPosition(name, position) {
  MissionUtils.Console.print(`${name} : ${generateProgressBar(position)}`);
}

export function printWinnerCar(winnerNames) {
  MissionUtils.Console.print(`최종 우승자 : ${formatWinnerNames(winnerNames)}`);
}
