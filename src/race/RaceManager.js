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

    #validateRacingCount(count) {
        Validator.checkNotBlank(count);
        Validator.checkNumberValue(count);
        Validator.checkLessThanOrEqualMaxCount(count, this.#MAX_RACE_COUNT);
    }

    async #getRacingCountFromInput() {
        const inputCount = await IOHandler.input("시도할 횟수는 몇 회인가요?\n");
        this.#validateRacingCount(inputCount);

        return inputCount;
    }

    async #getRacingInfo() {
        const cars = await this.#getCars();
        const racingCount = await this.#getRacingCountFromInput();

        return { cars, racingCount };
    }

    #printWinners(winnerNames) {
        const winnerMessage = `최종 우승자 : ${winnerNames.join(', ')}`;
        IOHandler.output(winnerMessage);
    }

    async racing() {
        const racingInfo = await this.#getRacingInfo();

        const raceExcutor = new RaceExcutor();
        raceExcutor.executeForRaceCount(racingInfo.cars, racingInfo.racingCount);

        const winnerNames = getWinners(racingInfo.cars);
        this.#printWinners(winnerNames);
    }
}

export default RaceManager;