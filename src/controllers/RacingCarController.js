import AttemptCounter from "../models/AttemptCounter.js";
import Cars from "../models/Cars.js";
import RacingGame from "../models/RacingGame.js";
import { InputView } from "../views/InputView.js";
import { OutputView } from "../views/OutputView.js";

class RacingCarController {

    #cars;

    #attemptCount;

    #racingGame;

    #racingStatus;

    #winners;

    async racingCarProcess() {
        await this.getInputCarNames();
        await this.getInputAttemptCount();
        this.getExecutionResult();
        this.printExecutionResult();
        this.printRacingCarWinners();
    }

    async getInputCarNames() {
        const INPUT_RACING_CARS = await InputView.getRacingCarNamesInput();
        this.#cars = Cars.getRacingCarNames(INPUT_RACING_CARS);
    }

    async getInputAttemptCount() {
        const INPUT_ATTEMPT_COUNT = await InputView.getAttemptCountInput();
        this.#attemptCount = AttemptCounter.getAttemptCount(INPUT_ATTEMPT_COUNT);
    }

    getExecutionResult() {
        this.#racingGame = new RacingGame(this.#cars, this.#attemptCount);
        this.#racingStatus = this.#racingGame.getExecutionResults();
        this.#winners = this.#racingGame.getRacingWinners();
    }

    printExecutionResult() {
        OutputView.outputExecutionResults();
        this.#racingStatus.forEach(racingStatus => 
            this.printExecutionRoundResult(racingStatus)
        );
    }

    printExecutionRoundResult(racingStatus) {
        Object.entries(racingStatus).forEach(([car, status]) => 
            OutputView.outputExecutionRoundResult(car, status)
        );
        OutputView.outputPrintLine();
    }

    printRacingCarWinners() {
        OutputView.outputRacingCarWinners(this.#winners);
    }
}

export default RacingCarController;