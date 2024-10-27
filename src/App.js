import { Console } from "@woowacourse/mission-utils";
import InputValidator from "./InputValidator.js";
import Race from "./Race.js";

class App {
    async run() {
        const inputCarNames = await this.getInputCarNames();
        InputValidator.validateInputCarNames(inputCarNames);
        const carNameList = inputCarNames.split(",");

        const inputTryCount = await this.getInputTryCount();
        InputValidator.validateInputTryCount(inputTryCount);
        const tryCount = Number(inputTryCount);

        const newRace = new Race(carNameList, tryCount);
        newRace.start();
    }

    async getInputCarNames() {
        try {
            const message = "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n";
            const inputCarNames = await Console.readLineAsync(message);
            return inputCarNames;
        } catch (error) {}
    }

    async getInputTryCount() {
        try {
            const message = "시도할 횟수는 몇회인가요?\n";
            const inputTryCount = await Console.readLineAsync(message);
            return inputTryCount;
        } catch (error) {}
    }
}

export default App;
