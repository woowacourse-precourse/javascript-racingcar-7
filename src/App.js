import { input, print, getRandom } from '../utils/index.js';

class App {
    constructor() {
        this.state = {
            cars: [],
            raceCount: 0,
        };
        this.error = {
            cars: (value) => {
                if (value.length === 0) return 'error';
                const parsedString = value.split(',');
                for (let i = 0; i < parsedString.length; i++) {
                    if (
                        parsedString[i].length === 0 ||
                        parsedString[i].length > 5
                    ) {
                        return 'error';
                    }
                }
                return 'correct';
            },
            raceCount: (value) => {
                const num = Number(value);
                if (isNaN(num)) return 'error';
                if (num < 0) return 'error';
                if (num !== Math.floor(num)) return 'error';
                return 'correct';
            },
        };
    }

    setState(key, value) {
        this.state = {
            ...this.state,
            [key]: value,
        };
    }

    async getCars() {
        const cars = await input(
            '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
            this.error.cars
        );

        this.setState(
            'cars',
            cars.split(',').map((car) => [car, 0])
        );
    }

    async getRaceCount() {
        const raceCount = await input(
            '시도할 횟수는 몇 회인가요?',
            this.error.raceCount
        );
        this.setState('raceCount', Number(raceCount));
    }

    startRace() {
        print('실행 결과');
        for (let cur = 0; cur < this.state.raceCount; cur++) {
            const newCars = this.state.cars.map(([name, movement]) => {
                if (getRandom() >= 4) {
                    return [name, movement + 1];
                } else {
                    return [name, movement];
                }
            });
            this.setState('cars', newCars);
            this.state.cars.forEach((car) => {
                print(`${car[0]} : ${'-'.repeat(car[1])}`);
            });
            print('');
        }
    }

    showRaceResult() {
        const sortedCars = [...this.state.cars].sort((a, b) => b[1] - a[1]);
        const maxMovement = sortedCars[0][1];
        const winners = [];
        for (let i = 0; i < sortedCars.length; i++) {
            const [name, movement] = sortedCars[i];
            if (movement === maxMovement) winners.push(name);
            else break;
        }
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
