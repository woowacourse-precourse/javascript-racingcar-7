import IOHandler from "../utils/IOHandler.js";
import * as Validator from "./Validator.js";
import RaceExcutor from "./RaceExecutor.js";
import { getWinners } from "./WinnerSelector.js";
import CarManager from "./CarManager.js";

class RaceManager {
    #MAX_RACE_COUNT = Object.freeze(100);

    async #getCars() {
        const carManager = new CarManager();
        return carManager.getCars();
    }

    #validateMoveTryCount(count) {
        Validator.checkNotBlank(count);
        Validator.checkNumberValue(count);
        Validator.checkLessThanOrEqualMaxCount(count, this.#MAX_RACE_COUNT);
    }

    async #getMoveTryCountFromInput() {
        const inputCount = await IOHandler.input("시도할 횟수는 몇 회인가요?\n");
        this.#validateMoveTryCount(inputCount);

        return inputCount;
    }

    async #getRacingInfo() {
        const cars = await this.#getCars();
        const moveTryCount = await this.#getMoveTryCountFromInput();

        return { cars, moveTryCount };
    }

    #printWinners(winnerNames) {
        const winnerMessage = `최종 우승자 : ${winnerNames.join(', ')}`;
        IOHandler.output(winnerMessage);
    }

    async racing() {
        const racingInfo = await this.#getRacingInfo();

        const raceExcutor = new RaceExcutor();
        raceExcutor.executeForMoveTryCount(racingInfo.cars, racingInfo.moveTryCount);

        const winnerNames = getWinners(racingInfo.cars);
        this.#printWinners(winnerNames);
    }
}

export default RaceManager;