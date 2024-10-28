import { Console } from "@woowacourse/mission-utils";

class App {
    async run() {
        try {
            const carNames = await this.getCarNames();
            const tryCount = await this.getTryCount();
            Console.print(`시도 횟수: ${tryCount}`);
        } catch (error) {
            Console.print(error.message);
        }
    }

    async getCarNames() {
        const input = await this.promptCarNames();
        const carNames = this.parseCarNames(input);
        this.validateCarNames(carNames);
        return carNames;
    }

    async promptCarNames() {
        return await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    }

    parseCarNames(input) {
        return input.split(",").map((name) => name.trim());
    }

    validateCarNames(carNames) {
        if (carNames.some((name) => name.length > 5) || carNames.length === 0) {
            throw new Error("[ERROR] 자동차 이름은 1자 이상 5자 이하만 가능합니다.");
        }
    }

    async getTryCount() {
        const input = await this.promptTryCount();
        const tryCount = this.parseTryCount(input);
        this.validateTryCount(tryCount);
        return tryCount;
    }

    async promptTryCount() {
        return await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    }

    parseTryCount(input) {
        return parseInt(input, 10);
    }

    validateTryCount(tryCount) {
        if (isNaN(tryCount) || tryCount <= 0) {
            throw new Error("[ERROR] 시도 횟수는 양의 정수여야 합니다.");
        }
    }
}

export default App;
