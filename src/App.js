import { Console } from "@woowacourse/mission-utils";

class App {
    async getCarNameList() {
        const carName = await Console.readLineAsync("경주할 자동차 이름을 쉼표로 구분하여 입력하세요 : ");
        const carNameList = carName.split(",");

        if (carNameList.some(name => name.length > 5)) {
            throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
        }
        return carNameList.map(name => ({ name: name.trim(), position: 0 }));
    }

    async getTryCount() {
        const tryCount = await Console.readLineAsync("시도할 횟수를 입력해주세요 : ");

        if (isNaN(+tryCount) || tryCount < 1) {
            throw new Error("[ERROR] 시도 횟수는 1 이상의 숫자여야 합니다.");
        }
        return tryCount;
    }

    // async playRaceGame(cars, tryCount) {
    //     for (let i = 0; i < tryCount; i++) {
    //         Console.print(tryCount);
    //     }
    // }

    async run() {
        const cars = await this.getCarNameList();
        const tryCount = await this.getTryCount();
        Console.print(cars);
        Console.print(tryCount);

        // const race = await this.playRaceGame();
        // Console.print("ddd", race);
    }
}

export default App;
