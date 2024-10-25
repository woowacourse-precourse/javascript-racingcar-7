import IOHandler from "../utils/IOHandler.js";
import * as Validator from "./Validator.js";
import RaceExcutor from "./RaceExecutor.js";
import { getWinners } from "./WinnerSelector.js";
import Car from "./Car.js";

class RaceManager {
    #MAX_NAME_LENGTH = Object.freeze(5);

    #MAX_RACE_COUNT = Object.freeze(100);

    #cars;

    #racingCount;

    #getNamesFromStr(str) {
        return str.replaceAll(' ', '').split(',');
    }

    #setCarsFromCarNames(carNames) {
        this.#cars = carNames.map((name) => new Car(name));
    }

    #validateCarName(name) {
        Validator.checkNotBlank(name);
        Validator.checkOnlyEnglishCharacters(name);
        Validator.checkValidNameLength(name, this.#MAX_NAME_LENGTH);
    }

    async #setCarsFromInput() {
        const inputStr = await IOHandler.input("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
        const carNames = this.#getNamesFromStr(inputStr);
        carNames.forEach(name => {
            this.#validateCarName(name);
        });

        this.#setCarsFromCarNames(carNames);
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
        await this.#setCarsFromInput();
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