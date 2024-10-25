import { InputView } from "../views/InputView.js";

class RacingCarController {

    async racingCarProcess() {
        await this.getInputCarNames();
    }

    async getInputCarNames() {
        const INPUT_RACING_CARS = await InputView.getRacingCarNamesInput();
    }
}

export default RacingCarController;