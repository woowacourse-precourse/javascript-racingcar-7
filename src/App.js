import { Console, Random } from "@woowacourse/mission-utils";

class App {
    async run() {
        const inputCarNames = await this.getInputCarNames();
        const carNameList = inputCarNames.split(",");

        const inputTryCount = await this.getInputTryCount();
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
            const inputTryCount = await Console.readIntAsync(message);
            return inputTryCount;
        } catch (error) {}
    }
}

export default App;
