import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE } from "./constants";

const woowahanPrint = MissionUtils.Console.print;

function displayEndOfStart() {
    woowahanPrint(MESSAGE.DISPLAY_END_OF_START);
}

function displayStatus(cars) {
    cars.forEach((car) => {
        woowahanPrint(`${car.getName()} : ${'-'.repeat(car.getMoved())}`);
    });
    woowahanPrint(MESSAGE.DISPLAY_EMPTY_LINE);
}

function displayResult(result) {
    woowahanPrint(`${MESSAGE.DISPLAY_WINNER}${result.join(', ')}`);
}


export { displayResult, displayStatus, displayEndOfStart };