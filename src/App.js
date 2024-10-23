import { input, print, getRandom } from '../utils/index.js';

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

    isValidateCars(value) {
        try {
            if (value.length === 0)
                throw new Error('입력값이 유효하지 않습니다');
            const parsedString = value.split(',');
            if (parsedString.length !== new Set(parsedString).size)
                throw new Error('중복된 이름이 존재합니다');
            for (let i = 0; i < parsedString.length; i++) {
                if (parsedString[i].length === 0) {
                    throw new Error('이름이 공백인 자동차가 존재합니다');
                }
                if (parsedString[i].length > 5) {
                    throw new Error('자동차의 이름은 5자 이하로 등록해주세요');
                }
            }
        } catch (error) {
            throw error;
        }
    }
    isValidateRaceCount(value) {
        try {
            const num = Number(value);
            if (isNaN(num)) throw new Error('유효한 숫자가 아닙니다');
            if (num < 0) throw new Error('경주 횟수는 자연수를 입력해주세요');
            if (num !== Math.floor(num))
                throw new Error('경주 횟수는 자연수를 입력해주세요');
            return 'correct';
        } catch (error) {
            throw error;
        }
    }

    async getCars() {
        const cars = await input(
            '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
        );

        this.isValidateCars(cars);
        this.setState(
            'cars',
            cars.split(',').map((car) => [car, 0])
        );
    }

    async getRaceCount() {
        const raceCount = await input('시도할 횟수는 몇 회인가요?');
        this.isValidateRaceCount(raceCount);
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
            if (getRandom() >= 4) {
                return [name, movement + 1];
            } else {
                return [name, movement];
            }
        });
        this.setState('cars', newCars);
    }

    showRaceStatus() {
        this.state.cars.forEach((car) => {
            print(`${car[0]} : ${'-'.repeat(car[1])}`);
        });
    }

    findWinners() {
        const maxMovement = Math.max(
            ...this.state.cars.map(([_, count]) => count)
        );
        const winners = [];
        for (let i = 0; i < this.state.cars.length; i++) {
            const [name, movement] = this.state.cars[i];
            if (movement === maxMovement) winners.push(name);
            else break;
        }
        return winners;
    }

    showRaceResult() {
        const winners = this.findWinners();
        print('최종 우승자 :', winners.join(','));
    }

    async run() {
        try {
            await this.getCars();
            await this.getRaceCount();
            this.startRace();
            this.showRaceResult();
        } catch (error) {
            throw error;
        }
    }
}

export default App;
