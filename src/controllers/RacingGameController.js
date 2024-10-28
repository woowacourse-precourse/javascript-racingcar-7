import RacingGame from '../models/RacingGame.js';
import OutputView from '../views/OutputView.js';
import InputView from '../views/InputView.js';

class RacingGameController {
    constructor() {
        this.outputView = new OutputView();
        this.inputView = new InputView();
    }

    async run() {
        const {car, tryNumber} = await this.inputView.getInput();

        const game = new RacingGame(car);
        game.race(tryNumber);

        this.displayGameResults(game);
    }

    displayGameResults(game) {
        this.outputView.displayRoundResults(game.getResults());
        this.outputView.displayWinners(game.getWinners());
    }
}

export default RacingGameController;
