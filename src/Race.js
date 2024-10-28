import { Console } from "@woowacourse/mission-utils";
import CarManager from "./CarManager.js";
import WinnerDeterminer from "./WinnerDeterminer.js";

class Race {
    #carManager;
    #winnerDeterminer;
    #tryCount;

    constructor(carNameList, tryCount) {
        this.#carManager = new CarManager(carNameList);
        this.#winnerDeterminer = new WinnerDeterminer(this.#carManager.carList);
        this.#tryCount = tryCount;
    }

    start() {
        Console.print("\n실행 결과");
        for (let i = 0; i < this.#tryCount; i++) {
            this.#carManager.moveCars();
            this.#carManager.printPositions();
            Console.print("\n");
        }
        this.#winnerDeterminer.printWinners();
    }
}

export default Race;
