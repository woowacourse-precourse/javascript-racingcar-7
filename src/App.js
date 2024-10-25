import { Console, Random } from '@woowacourse/mission-utils';
import InputHandler from './InputHandler.js';
import RaceHander from './RaceHandler.js';
import RaceHandler from './RaceHandler.js';

class App {
    onStartLine(cars) {
        return Object.fromEntries(cars.map(car => [car, '']));
    }

    async run() {
        const inputHandler = new InputHandler();
        const raceHandler = new RaceHandler();

        const cars = await inputHandler.getCarNames();
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
