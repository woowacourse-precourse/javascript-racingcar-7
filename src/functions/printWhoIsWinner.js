import { Console } from '@woowacourse/mission-utils';

/**
 * @param {Array} winners - 우승자(들)의 이름을 담은 배열
 */
export function printWhoIsWinner(winners) {
	const winnerMessage = winners.join(', ');
	Console.print(`\n최종 우승자 : ${winnerMessage}`);
}
