import { input, print } from '../utils/index.js';

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
            },
            raceCount: (value) => {
                const num = Number(value);
                if (isNaN(num)) return 'error';
                if (num < 0) return 'error';
                if (num !== Math.floor(num)) return 'error';
            },
        };
    }

    setState(key, value) {
        this.state = {
            ...this.state,
            [key]: value,
        };
    }

    async getValues() {
        const cars = await input(
            '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
            this.error.cars
        );
        const raceCount = await input(
            '시도할 횟수는 몇 회인가요?',
            this.error.raceCount
        );
        this.setState('cars', cars.split(','));
        this.setState('raceCount', Number(raceCount));
    }
    async run() {
        await this.getValues();
        print(this.state);
    }
}

export default App;
