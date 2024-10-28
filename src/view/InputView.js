import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from '../constants/messages.js';
import { InputValidator } from '../utils/validator.js';

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
