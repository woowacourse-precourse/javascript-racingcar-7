import { Console, Random } from '@woowacourse/mission-utils';
import InputHandler from './InputHandler.js';
import RaceHander from './RaceHandler.js';
import RaceHandler from './RaceHandler.js';

class App {
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

    async run() {
        const inputHandler = new InputHandler();
        const raceHandler = new RaceHandler();

        const carNames = await inputHandler.getCarNames();
        const cars = this.splitCars(carNames);
        let raceBoard = this.onStartLine(cars);
        const laps = await inputHandler.getLaps();

        Console.print('\n실행 결과');
        for (let move = 0; move < laps; move++) {
            raceHandler.doRace(raceBoard, cars);
            raceHandler.showRaceBoard(raceBoard);
            Console.print('\n');
        }

        raceHandler.showWinner(raceBoard, cars);
    }

    
}

export default App;
