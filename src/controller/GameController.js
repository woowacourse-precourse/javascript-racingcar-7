import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from '../constants/messages.js';
import CarModel from '../model/CarModel.js';
import GameModel from '../model/GameModel.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class GameController {
	constructor() {
		this.inputView = new InputView();
		this.outputView = new OutputView();
		this.gameModel = null;
	}

	async getCarsFromInput() {
		const carNames = await this.inputView.getCarNames();
		return carNames.map((name) => new CarModel(name));
	}

	async getRoundsFromInput() {
		const rounds = await this.inputView.getRoundNumber();
		return rounds;
	}

	async init() {
		const cars = await this.getCarsFromInput();
		const rounds = await this.getRoundsFromInput();
		this.gameModel = new GameModel(cars, rounds);
	}

	async run() {
		await this.init();

		Console.print(MESSAGES.runRound);

		while (!this.gameModel.isGameOver()) {
			this.gameModel.runRound();
			const cars = this.gameModel.getCars();
			this.outputView.printRoundResult(cars);
		}

		const winners = this.gameModel.getWinnersName();
		this.outputView.printWinner(winners);
	}
}

export default GameController;
