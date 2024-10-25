import { Console } from "@woowacourse/mission-utils";

class App {
    async run() {
        const inputCarNames = await Console.readLineAsync(
            "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
        );

        const splittedCarNames = inputCarNames.split(",");

        for (let car of splittedCarNames) {
            if (car.length > 5) {
                throw new Error("[ERROR] 자동차 이름은 5자 이하로 입력 가능합니다.");
            }
        }

        const inputTryCnt = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    }
}

export default App;
