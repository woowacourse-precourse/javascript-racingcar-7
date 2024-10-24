import { Console, Random } from '@woowacourse/mission-utils';


class App {
    async getCarNames() {
        const input = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
        
        if (input === '') {
            throw new Error('[ERROR] 경주 하려면 자동차가 2대 이상 필요해요!');
        } else {
            return input;
        }   
    }

    splitCars(carNames) {
        const cars = carNames.split(',');
        const hasEmptyName = cars.some(car => car === '');
        const nameTooLong = cars.some(car => car.length > 5);
        const notEnoughCars = cars.length < 2;
        const hasDuplicates = new Set(cars).size !== cars.length;

        if (hasEmptyName) {
            throw new Error('[ERROR] 누군가 참가용지에 이름을 쓰지 않았습니다!');
        } else if (nameTooLong) {
            throw new Error('[ERROR] 자동차 이름은 5자 이하로 입력해주세요!');
        } else if (notEnoughCars) {
            throw new Error('[ERROR] 경주 하려면 자동차가 2대 이상 필요해요!');
        } else if (hasDuplicates) {
            throw new Error('[ERROR] 중복된 자동차 이름이 있어요!');
        } else {
            return cars;
        }
    }

    onStartLine(cars) {
        return Object.fromEntries(cars.map(car => [car, '']));
    }

    async getLaps() {
        const input = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
        
        if (input === '') {
            throw new Error('[ERROR] 모든 참가자가 경주를 포기했습니다!');
        } else if (isNaN(Number(input))) {
            throw new Error('[ERROR] 숫자를 입력해주세요!');
        } else if (!Number.isInteger(Number(input))) {
            throw new Error('[ERROR] 1 이상의 정수를 입력해주세요!');
        } else if (Number(input) < 0) {
            throw new Error('[ERROR] 경기 횟수는 0보다 작을 수 없어요!');
        }else {
            return input;
        }   
    }

    async run() {
        try {
            const carNames = await this.getCarNames();
            const cars = this.splitCars(carNames);
            const racers = this.onStartLine(cars);
            const laps = await this.getLaps();
        } catch (error) {
            Console.print(`${error.message}`);
        }
    }
}

export default App;
