import { MissionUtils } from '@woowacourse/mission-utils';

export const printWinner = async (winnerNames) => {
  return MissionUtils.Console.print(`최종 우승자 : ${winnerNames}`);
};
