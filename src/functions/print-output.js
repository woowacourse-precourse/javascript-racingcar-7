import { Console } from "@woowacourse/mission-utils";

function printHeader() {
    Console.print("\n실행 결과");
}

function printEmptyLine() {
    Console.print('');
}

function printRaceResult(car, position) {
    const positionDisplay = '-'.repeat(position);
    Console.print(`${car} : ${positionDisplay}`);
}

function printWinner(winner) {
    const winnerList = winner.join(', ');
    Console.print(`최종 우승자 : ${winnerList}`);
}

export { printHeader, printEmptyLine, printRaceResult, printWinner };