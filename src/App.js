import { Console, MissionUtils } from '@woowacourse/mission-utils';

class App {
    constructor() {
        this.result = [];
        this.rounds = 0;
    }

    async run() {
        this.result = await this.carNameInput();
        this.rounds = await this.countInput();
        Console.print('실행 결과');
        await this.playGame();
        this.printWinners();
    }

    async carNameInput() {
        const inputArray = await Console.readLineAsync("경주할 자동차 이름을 입력하세요(이름은 쉼표(,) 기준으로 구분)");
        return inputArray.split(',').map(this.formatCarName);
    }

    formatCarName(carName) {
        if (carName.length > 5) {
            throw new Error("[ERROR] 자동차 이름은 5글자를 초과할 수 없습니다.");
        }
        return carName + ' : ';
    }

    async countInput() {
        const count = await Console.readLineAsync("시도할 회수는 몇 회인가요?");
        if (count < 1) {
            throw new Error("[ERROR] 시도 횟수는 1 이상이어야 합니다.");
        }
        return parseInt(count, 10);
    }

    printResult() {
        this.result.forEach(car => {
            Console.print(car);
        });
    }

    isForward() {
        return MissionUtils.Random.pickNumberInRange(0, 9) >= 4;
    }

    updateCarPosition(car) {
        if (this.isForward()) {
            return car + '-';
        }
        return car;
    }

    game() {
        return this.result.map(car => this.updateCarPosition(car));
    }

    async playGame() {
        for (let i = 0; i < this.rounds; i++) {
            this.result = this.game();
            this.printResult();
            Console.print('');
        }
    }

    findWinners() {
        const maxDashes = Math.max(...this.result.map(car => (car.match(/-/g) || []).length));
        return this.result.filter(car => (car.match(/-/g) || []).length === maxDashes);
    }

    printWinners() {
        const winners = this.findWinners().map(car => car.split(' : ')[0]);
        Console.print(`최종 우승자 : ${winners.join(', ')}`);
    }
}

export default App;