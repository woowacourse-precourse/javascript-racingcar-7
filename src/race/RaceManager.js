import IOHandler from "../utils/IOHandler.js";
import { checkValidNameLength, checkLessThanOrEqualMaxCount } from "./Validator.js";
import RaceExcutor from "./RaceExecutor.js";
import { getWinners } from "./WinnerSelector.js";
import Car from "./Car.js";

class RaceManager {
    #MAX_NAME_LENGTH = Object.freeze(5);

    #MAX_RACE_COUNT = Object.freeze(100);

    #carList;

    #racingCount;

    #getNamesFromStr(str) {
        return str.replaceAll(' ', '').split(',');
    }

    #setCarListFromCarNames(carNames) {
        this.#carList = carNames.map((name) => new Car(name));
    }

    #setRacingCount(count) {
        this.#racingCount = count;
    }

    async #prepareRacing() {
        const inputStr = await IOHandler.input("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
        const carNames = this.#getNamesFromStr(inputStr);
        carNames.forEach(name => {
            checkValidNameLength(name, this.#MAX_NAME_LENGTH);
        });

        const inputCount = await IOHandler.input("시도할 횟수는 몇 회인가요\n");
        checkLessThanOrEqualMaxCount(inputCount, this.#MAX_RACE_COUNT);

        this.#setCarListFromCarNames(carNames);
        this.#setRacingCount(inputCount);
    }

    #printWinners(winnerNames) {
        const winnerMessage = `최종 우승자 : ${winnerNames.join(', ')}`;
        IOHandler.output(winnerMessage);
    }

    async racing() {
        await this.#prepareRacing();

        const raceExcutor = new RaceExcutor();
        raceExcutor.executeForRaceCount(this.#carList, this.#racingCount);

        const winnerNames = getWinners(this.#carList);
        this.#printWinners(winnerNames);
    }
}

export default RaceManager;