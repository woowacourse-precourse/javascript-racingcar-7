import { input, print } from '../utils/index.js';
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

    async getValues() {
        const cars = await input(
            '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
        );
        const raceCount = await input('시도할 횟수는 몇 회인가요?');
        this.setState('cars', cars);
        this.setState('raceCount', Number(raceCount));
    }
    async run() {
        await this.getValues();
        print(this.state);
    }
}

export default App;
