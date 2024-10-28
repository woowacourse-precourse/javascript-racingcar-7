import {Console, Random} from '@woowacourse/mission-utils';

class CarList {
    constructor() {
        this.carnames = [];
        this.iter = 0;
        this.scores = [];
    }

    async initialize() {
        await this.getCarNames();
        await this.getIterations();
        this.scores = new Array(this.carnames.length).fill(0);
        this.validateCarNames();
        this.validateIterations();
    }

    async getCarNames() {
        let namesInput = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
        this.carnames = namesInput.split(',');
    }

    async getIterations() {
        this.iter = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    }

    validateCarNames() {
        const invalidName = this.carnames.find(name => name.length > 6);
        if (invalidName) {
            this.throwError("잘못된 입력입니다");
        }
    }

    validateIterations() {
        if (isNaN(this.iter)) {
            this.throwError("잘못된 입력입니다");
        }
    }

    throwError(message) {
        throw new Error(`[ERROR] : ${message}`);
    }

    simulate() {
        for (let i = 0; i < this.iter; i++) {
            this.runIteration();
            this.displayScores();
        }
    }

    runIteration() {
        this.scores = this.scores.map(score => score + this.generateScore());
    }

    generateScore() {
        return Random.pickNumberInRange(0, 9) / 4;
    }

    displayScores() {
        this.scores.forEach((score, index) => {
            Console.print(`${this.carnames[index]} : ${'-'.repeat(score)}`);
        });
        Console.print("");
    }

    prizing() {
        let max = Math.max(...this.scores);
        let winners = this.findWinners(max);
        return winners;
    }

    findWinners(max) {
        let winners = [];
        this.scores.forEach((score, index) => {
            if (score === max) {
                winners.push(this.carnames[index]);
            }
        });
        return winners;
    }
}

export default CarList;
