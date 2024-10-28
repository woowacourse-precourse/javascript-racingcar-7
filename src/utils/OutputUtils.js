import { MissionUtils } from '@woowacourse/mission-utils';

import { WINNER_PROMPT } from '../constants.js';

export function generateProgressBar(position) {
  return '-'.repeat(position);
}

export function formatWinnerNames(names) {
  return names.map((name) => name).join(', ');
}

export function printCarPosition(name, position) {
  MissionUtils.Console.print(`${name} : ${generateProgressBar(position)}`);
}

export function printWinnerCar(winnerNames) {
  MissionUtils.Console.print(`${WINNER_PROMPT}${formatWinnerNames(winnerNames)}`);
}
