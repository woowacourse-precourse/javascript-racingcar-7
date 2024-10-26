import { input, print, getRandom } from '../utils/index.js';

export const MOVING_FORWARD = 4;
export const STOP = 3;
export const INVALID_NUMBER_ERROR = `[ERROR] 유효한 숫자가 아닙니다`;

class App {
    constructor() {
        this.state = {
            cars: [],
            raceCount: 0,
        };
    }

    setState(key, value) {
        this.state = {
            ...this.state,
            [key]: value,
        };
    }

    validateCars(value) {
        if (value.length === 0) {
            throw new Error('[ERROR] 입력값이 유효하지 않습니다');
        }
        const parsedString = value.split(',');
        if (parsedString.length !== new Set(parsedString).size) {
            throw new Error('[ERROR] 중복된 이름이 존재합니다');
        }
        parsedString.forEach((str) => {
            if (str.length === 0) {
                throw new Error('[ERROR] 이름이 공백인 자동차가 존재합니다');
            }
            if (str.length > 5) {
                throw new Error(
                    '[ERROR] 자동차의 이름은 5자 이하로 등록해주세요'
                );
            }
        });
    }

    validateRaceCount(value) {
        const num = Number(value);
        if (isNaN(num)) {
            throw new Error(INVALID_NUMBER_ERROR);
        }
        if (num < 0) {
            throw new Error(INVALID_NUMBER_ERROR);
        }
        if (num !== Math.floor(num)) {
            throw new Error(INVALID_NUMBER_ERROR);
        }
    }

    async getCars() {
        const cars = await input(
            '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
        );

        this.validateCars(cars);
        this.setState(
            'cars',
            cars.split(',').map((car) => [car, 0])
        );
    }

    async getRaceCount() {
        const raceCount = await input('시도할 횟수는 몇 회인가요?');
        this.validateRaceCount(raceCount);
        this.setState('raceCount', Number(raceCount));
    }

    startRace() {
        print('실행 결과');
        for (let cur = 0; cur < this.state.raceCount; cur++) {
            this.moveCars();
            this.showRaceStatus();
            print('');
        }
    }

    moveCars() {
        const newCars = this.state.cars.map(([name, movement]) => {
            if (getRandom() >= MOVING_FORWARD) {
                return [name, movement + 1];
            } else {
                return [name, movement];
            }
        });
        this.setState('cars', newCars);
    }

    showRaceStatus() {
        this.state.cars.forEach((car) => {
            const [name, movement] = car;
            print(`${name} : ${'-'.repeat(movement)}`);
        });
    }

    findWinners() {
        const maxMovement = Math.max(
            ...this.state.cars.map(([name, movement]) => movement)
        );
        const winners = this.state.cars.reduce((acc, cur) => {
            if (cur[1] === maxMovement) {
                return [...acc, cur[0]];
            }
            return acc;
        }, []);

        return winners;
    }

    showRaceResult() {
        const winners = this.findWinners();
        print('최종 우승자 :', winners.join(','));
    }

    async run() {
        await this.getCars();
        await this.getRaceCount();
        this.startRace();
        this.showRaceResult();
    }
}

export default App;
