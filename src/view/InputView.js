import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from '../constatns/messages';

class InputView {
	async getCarNames() {
		const carNames = await Console.readLineAsync(MESSAGES.getCarNames);
		return carNames.split(',');
	}

	async getRoundNumber() {
		const rounds = await Console.readLineAsync(MESSAGES.getRoundNumber);
		return Number(rounds);
	}
}
