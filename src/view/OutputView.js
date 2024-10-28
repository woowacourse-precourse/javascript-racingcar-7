import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from '../constants/messages.js';

class OutputView {
	printRoundResult(cars) {
		cars?.forEach((car) => {
			Console.print(this.formatRoundResult(car));
		});
		Console.print('\n');
	}

	printWinner(winners) {
		Console.print(this.formatWinner(winners));
	}

	formatRoundResult(car) {
		return `${car.getName()} : ${MESSAGES.move.repeat(
			car.getCurrentPosition()
		)}`;
	}

	formatWinner(winners) {
		return `${MESSAGES.winner} ${winners.join(', ')}`;
	}
}

export default OutputView;
