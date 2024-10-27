import { MissionUtils } from "@woowacourse/mission-utils";

export class RacingGame {
    constructor() {
        this.cars = {};
        this.tryCount = 0;
    }

    validateNames(names) {
        const nameSet = new Set();
        names.forEach(name => {
            if (name.length > 5) {
                throw new Error("[ERROR] 이름은 5자 이하만 가능합니다.");
            }
            if (nameSet.has(name)) {
                throw new Error("[ERROR] 중복된 이름이 있습니다.");
            }
            nameSet.add(name);
        });
    }

    validateTryCount(count) {
        if (isNaN(count) || count <= 0 || count != parseInt(count)) {
            throw new Error("[ERROR] 자연수만 입력 가능합니다.");
        }
    }

    async getInput() {
        const namesInput = await MissionUtils.Console.readLineAsync(
            "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
        );
        const names = namesInput.split(',');
        this.validateNames(names);
        
        const attemptsInput = await MissionUtils.Console.readLineAsync(
            "시도할 횟수는 몇 회인가요?\n"
        );
        this.tryCount = Number(attemptsInput);
        this.validateTryCount(this.tryCount);
        names.forEach(name => this.cars[name] = ""); 
    }

    printRoundResult() {
        for (const car in this.cars) {
            MissionUtils.Console.print(`${car} : ${this.cars[car]}\n`);
        }
        MissionUtils.Console.print("\n");
    }

    playRound() {
        for (const car in this.cars) {
            const randomValue = MissionUtils.Random.pickNumberInRange(0, 9);
            if (randomValue >= 4) {
                this.cars[car] += '-';
            }
        }
        this.printRoundResult();
    }

    printWinners() {
        const maxDistance = Math.max(...Object.values(this.cars).map(car => car.length));
        const winners = Object.keys(this.cars).filter(car => this.cars[car].length === maxDistance);
        MissionUtils.Console.print(`최종 우승자 : ${winners.join(', ')}`);
    }

    startRace() {
        for (let i = 0; i < this.tryCount; i++) {
            this.playRound();
        }
        this.printWinners();
    }
}

export default RacingGame;
