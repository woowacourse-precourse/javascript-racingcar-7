import { Console, Random } from "@woowacourse/mission-utils";

class App {
    async run() {}

    async getCarNameString() {
        try {
            const message = "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)";
            const input = await Console.readLineAsync(message);
            return input;
        } catch (error) {}
    }
}

export default App;
