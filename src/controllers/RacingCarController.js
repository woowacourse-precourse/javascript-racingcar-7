import AttemptCounter from "../models/AttemptCounter.js";
import Cars from "../models/Cars.js";
import { InputView } from "../views/InputView.js";

class RacingCarController {

    #cars;

    #attemptCount;

    async racingCarProcess() {
        await this.getInputCarNames();
        await this.getInputAttemptCount();
    }

    async getInputCarNames() {
        const INPUT_RACING_CARS = await InputView.getRacingCarNamesInput();
        this.#cars = Cars.getRacingCarNames(INPUT_RACING_CARS);
    }

    async getInputAttemptCount() {
        const INPUT_ATTEMPT_COUNT = await InputView.getAttemptCountInput();
        this.#attemptCount = AttemptCounter.getAttemptCount(INPUT_ATTEMPT_COUNT);
    }
}

export default RacingCarController;