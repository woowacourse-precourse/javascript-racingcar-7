import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from '../constatns/messages';
import { InputValidator } from '../utils/validator';

export class InputView {
	async getCarNames() {
		const input = await Console.readLineAsync(MESSAGES.getCarNames);
		const carNames = input.split(',');
		InputValidator.validateNameInput(carNames);
		return carNames;
	}

	async getRoundNumber() {
		const rounds = await Console.readLineAsync(MESSAGES.getRoundNumber);
		InputValidator.validateRoundInput(rounds);
		return Number(rounds);
	}
}
