import { Console } from '@woowacourse/mission-utils';

export function displayWinners(winners){
  Console.print(`최종 우승자 : ${winners.join(', ')}`);
}