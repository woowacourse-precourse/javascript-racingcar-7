import { MissionUtils } from '@woowacourse/mission-utils';

export function formatWinnerNames(winners) {
  return winners.map((winner) => winner).join(', ');
}

export function generateProgressBar(position) {
  return '-'.repeat(position);
}
