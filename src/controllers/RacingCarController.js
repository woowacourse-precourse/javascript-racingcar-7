import Cars from "../models/Car.js";
import { InputView } from "../views/InputView.js";

class RacingCarController {

    #cars;

    async racingCarProcess() {
        await this.getInputCarNames();
    }

    async getInputCarNames() {
        const INPUT_RACING_CARS = await InputView.getRacingCarNamesInput();
        this.#cars = Cars.getRacingCarNames(INPUT_RACING_CARS);
    }
}

export default RacingCarController;