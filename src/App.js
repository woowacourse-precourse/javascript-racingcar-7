import { Console, Random } from "@woowacourse/mission-utils";

class App {
    async run() {
        const inputCarNames = await this.getInputCarNames();
        const carNameList = inputCarNames.split(",");
    }

    async getInputCarNames() {
        try {
            const message = "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n";
            const inputCarNames = await Console.readLineAsync(message);
            return inputCarNames;
        } catch (error) {}
    }
}

export default App;
