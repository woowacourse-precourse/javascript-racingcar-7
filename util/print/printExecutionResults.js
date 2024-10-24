import { Console } from "@woowacourse/mission-utils";

import { printCarExecution } from "./printCarExecution.js";

export function printExecutionResults(cars, carMoveHashMap, ATTEMPT_COUNT) {
    Console.print('');
    Console.print('실행 결과');

    for (let i = 0; i < ATTEMPT_COUNT; i++) { //자동차별 진행 상황 출력
        printCarExecution(cars, carMoveHashMap);
    }
}