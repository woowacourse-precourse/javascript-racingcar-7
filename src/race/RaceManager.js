import IOHandler from "../utils/IOHandler.js";
import * as Validator from "./Validator.js";
import RaceExcutor from "./RaceExecutor.js";
import { getWinners } from "./WinnerSelector.js";
import CarManager from "./CarManager.js";

class RaceManager {

    #MAX_RACE_COUNT = Object.freeze(100);

    #cars;

    #racingCount;

    async #setCars() {
        const carManager = new CarManager();
        this.#cars = await carManager.getCars();
    }

    #setRacingCount(count) {
        this.#racingCount = count;
    }

    #validateRacingCount(count) {
        Validator.checkNotBlank(count);
        Validator.checkNumberValue(count);
        Validator.checkLessThanOrEqualMaxCount(count, this.#MAX_RACE_COUNT);
    }

    async #setRacingCountFromInput() {
        const inputCount = await IOHandler.input("시도할 횟수는 몇 회인가요?\n");
        this.#validateRacingCount(inputCount);
        this.#setRacingCount(inputCount);
    }

    async #prepareRacing() {
        await this.#setCars();
        await this.#setRacingCountFromInput();
    }

    #printWinners(winnerNames) {
        const winnerMessage = `최종 우승자 : ${winnerNames.join(', ')}`;
        IOHandler.output(winnerMessage);
    }

    async racing() {
        await this.#prepareRacing();

        const raceExcutor = new RaceExcutor();
        raceExcutor.executeForRaceCount(this.#cars, this.#racingCount);

        const winnerNames = getWinners(this.#cars);
        this.#printWinners(winnerNames);
    }
}

export default RaceManager;