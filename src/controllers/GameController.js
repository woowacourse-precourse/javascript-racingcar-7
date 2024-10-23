import InputView from '../views/InputView.js';

class GameController {
    constructor() {
        this.inputView = new InputView();
    }

    async run() {
        try {
            const carNames = await this.inputView.readCarNames();
            const racingCount = await this.inputView.readRacingCount();
            console.log(carNames, racingCount);


            return { carNames, racingCount}
        } catch (error) {
            throw error;
        }
    }

}

export default GameController;