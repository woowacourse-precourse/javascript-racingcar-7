import { MissionUtils } from "@woowacourse/mission-utils";

const woowahanPrint = MissionUtils.Console.print;

function displayEndOfStart() {
    woowahanPrint('\n실행결과');
}

function displayStatus(cars) {
    cars.forEach((car) => {
        woowahanPrint(`${car.getName()} : ${'-'.repeat(car.getMoved())}`);
    });
    woowahanPrint('');
}

function displayResult(result) {
    woowahanPrint(`최종 우승자 : ${result.join(', ')}`);
}


export { displayResult, displayStatus, displayEndOfStart };