import { MissionUtils } from '@woowacourse/mission-utils';

import { OUTPUT } from '../../constants/constants.js';

export const printWinner = async (winnerNames) => {
  return MissionUtils.Console.print(`${OUTPUT.WINNER}${winnerNames}`);
};
