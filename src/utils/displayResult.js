import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE } from "./constants.js";

function displayEndOfStart() {
    MissionUtils.Console.print(MESSAGE.DISPLAY_END_OF_START);
}

function displayStatus(cars) {
    cars.forEach((car) => {
        MissionUtils.Console.print(`${car.getName()} : ${'-'.repeat(car.getMoved())}`);
    });
    MissionUtils.Console.print(MESSAGE.DISPLAY_EMPTY_LINE);
}

function displayResult(result) {
    MissionUtils.Console.print(`${MESSAGE.DISPLAY_WINNER}${result.join(', ')}`);
}

export { displayResult, displayStatus, displayEndOfStart };