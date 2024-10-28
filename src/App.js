import { Console } from "@woowacourse/mission-utils";

class App {
    async run() {
        try {
            const carNames = await this.getCarNames();
            Console.print(`자동차 이름: ${carNames.join(", ")}`);
        } catch (error) {
            Console.print(error.message);
        }
    }

    async getCarNames() {
        const input = await this.promptCarNames();
        return this.parseCarNames(input);
    }

    async promptCarNames() {
        return await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    }

    parseCarNames(input) {
        return input.split(",").map((name) => name.trim());
    }
}

export default App;
