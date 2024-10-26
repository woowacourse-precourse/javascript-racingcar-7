import { input, print, getRandom } from '../utils/index.js';
import {
    MOVING_FORWARD,
    INVALID_RACECOUNT_ERROR,
    INVALID_CARS_ERROR,
    DUPLICATE_CAR_NAME_ERROR,
    BLANK_CAR_NAME_ERROR,
    CAR_NAME_LENGTH_ERROR,
} from '../constants.js';

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
            throw new Error(INVALID_CARS_ERROR);
        }
        const parsedString = value.split(',');
        if (parsedString.length !== new Set(parsedString).size) {
            throw new Error(DUPLICATE_CAR_NAME_ERROR);
        }
        parsedString.forEach((str) => {
            if (str.length === 0) {
                throw new Error(BLANK_CAR_NAME_ERROR);
            }
            if (str.length > 5) {
                throw new Error(CAR_NAME_LENGTH_ERROR);
            }
        });
    }

    validateRaceCount(value) {
        const num = Number(value);
        if (isNaN(num)) {
            throw new Error(INVALID_RACECOUNT_ERROR);
        }
        if (num < 0) {
            throw new Error(INVALID_RACECOUNT_ERROR);
        }
        if (num !== Math.floor(num)) {
            throw new Error(INVALID_RACECOUNT_ERROR);
        }
    }

    async getCars() {
        const cars = await input(
            '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
        );

        this.validateCars(cars);
        this.setState(
            'cars',
            cars.split(',').map((car) => ({
                name: car,
                movement: 0,
            }))
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
        const newCars = this.state.cars.map(({ name, movement }) => {
            if (getRandom() >= MOVING_FORWARD) {
                return { name, movement: movement + 1 };
            } else {
                return { name, movement };
            }
        });
        this.setState('cars', newCars);
    }

    showRaceStatus() {
        this.state.cars.forEach((car) => {
            const { name, movement } = car;
            print(`${name} : ${'-'.repeat(movement)}`);
        });
    }

    findWinners() {
        const maxMovement = Math.max(
            ...this.state.cars.map(({ movement }) => movement)
        );
        const winners = this.state.cars.reduce((acc, cur) => {
            if (cur.movement === maxMovement) {
                return [...acc, cur.name];
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
