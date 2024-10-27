import { Console, Random } from "@woowacourse/mission-utils";

class App {
    async getCarNameList() {
        const carName = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
        const carNameList = carName.split(",");

        if (carNameList.some(name => name.length > 5)) {
            throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
        }
        return carNameList.map(name => ({ name: name.trim(), position: 0 }));
    }

    async getTryCount() {
        const tryCount = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

        if (isNaN(+tryCount) || tryCount < 1) {
            throw new Error("[ERROR] 시도 횟수는 1 이상의 숫자여야 합니다.");
        }
        return tryCount;
    }

    async playRaceGame(cars, tryCount) {
        Console.print("실행결과\n");
        for (let i = 0; i < tryCount; i++) {
            cars.forEach(car => {
                if (Random.pickNumberInRange(0, 9) >= 4) {
                    car.position += 1;
                }
            });
            this.printEachRoundResult(cars);
            Console.print("\n");
        }
    }

    async printEachRoundResult(cars) {
        cars.forEach(car => {
            Console.print(`${car.name} : ${"-".repeat(car.position)}`);
        });
    }

    async printFinalWinner(cars) {
        const maxPosition = Math.max(...cars.map(car => car.position));
        const winner = cars.filter(car => car.position === maxPosition).map(car => car.name);

        const winnerList = winner.join(", ");
        Console.print("최종 우승자 : " + winnerList);
    }

    async run() {
        const cars = await this.getCarNameList();
        const tryCount = await this.getTryCount();

        this.playRaceGame(cars, tryCount);
        this.printFinalWinner(cars);
    }
}

export default App;
