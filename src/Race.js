const Car = require('./Car');
const { getRandomNumber, getUserInput } = require('./utils');

class Race {
    constructor() {
        this.cars = [];
        this.rounds = 0;
    }

    // 게임 초기화: 자동차 이름과 이동 횟수 설정
    async initializeGame() {
        await this.setCars();
        await this.setRounds();
    }

    // 자동차 이름 입력 및 설정
    async setCars() {
        const carNames = await getUserInput('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
        this.cars = carNames.split(',').map((name) => new Car(name));
    }

    // 이동 횟수 입력 및 설정
    async setRounds() {
        const rounds = await getUserInput('시도할 횟수는 몇 회인가요?\n');
        this.rounds = parseInt(rounds, 10);
        if (isNaN(this.rounds) || this.rounds <= 0) throw new Error('[ERROR] 시도 횟수는 1 이상의 숫자여야 합니다.');
    }

    // 경주 실행
    runRace() {
        console.log('\n실행 결과');
        for (let i = 0; i < this.rounds; i++) {
            this.cars.forEach((car) => car.move(getRandomNumber(0, 9)));
            this.printRoundResult();
        }
    }

    // 차수별 실행 결과 출력
    printRoundResult() {
        this.cars.forEach((car) => console.log(`${car.name} : ${car.getPosition()}`));
        console.log('');
    }

    // 최종 우승자 결정 및 출력
    printWinners() {
        const maxPosition = Math.max(...this.cars.map((car) => car.position));
        const winners = this.cars.filter((car) => car.position === maxPosition).map((car) => car.name);
        console.log(`최종 우승자 : ${winners.join(', ')}`);
    }
}

module.exports = Race;
