import { Console } from '@woowacourse/mission-utils';
import InputHandler from './InputHandler.js';
import RaceHandler from './RaceHandler.js';

class App {
    async run() {
        const inputHandler = new InputHandler();
        const raceHandler = new RaceHandler();

        const carNames = await inputHandler.getCarNames();
        let raceBoard = raceHandler.onStartLine(carNames);
        const laps = await inputHandler.getLaps();

        Console.print('\n실행 결과');
        for (let move = 0; move < laps; move++) {
            raceHandler.doRace(raceBoard, carNames);
            raceHandler.showRaceBoard(raceBoard);
        }

        raceHandler.showWinner(raceBoard, carNames);
    }
}

export default App;
