import RacingGame from '../models/RacingGame.js';
import OutputView from '../views/OutputView.js';
import InputView from '../views/InputView.js';
import { Console } from "@woowacourse/mission-utils";


class RacingGameController {
    constructor() {
        this.outputView = new OutputView();
        this.inputView = new InputView();
    }

    async run() {
        const { car, tryNumber } = await this.inputView.getInput();

        const game = new RacingGame(car);

        Console.print('실행 결과 \n');
        for (let i = 0; i < tryNumber; i++) {
            game.race(1);
            this.outputView.displayRoundResults(game.getResults());
        }

        this.outputView.displayWinners(game.getWinners());
    }
}

export default RacingGameController;
