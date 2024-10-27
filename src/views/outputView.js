import { Console } from "@woowacourse/mission-utils";

export function printEachRoundResult(carRace, attemptNum) {
    Console.print('\n실행결과');
    for (let i = 0; i < attemptNum; i++) {
        carRace.start();
        let resultList = carRace.eachRoundResult();
        resultList.forEach(result => Console.print(result));
        Console.print('');
    }
}

export function printWinner(winner) {
    Console.print(`최종 우승자 : ${winner.join(', ')}`);
}