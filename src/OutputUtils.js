import { MissionUtils } from '@woowacourse/mission-utils';

export function formatWinnerNames(names) {
  return names.map((name) => name).join(', ');
}

export function generateProgressBar(position) {
  return '-'.repeat(position);
}

export function printCarPosition(name, position) {
  MissionUtils.Console.print(`${name} : ${generateProgressBar(position)}`);
}
