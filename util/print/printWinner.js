import { Console } from "@woowacourse/mission-utils";

import findMoveLonger from "../findMoveLonger.js";

export default function printWinner(winners, carMoveHashMap) {
    if (winners.length === 0) {
        Console.print('우승자가 가려지지 않았습니다.');

        findMoveLonger(carMoveHashMap);

    } else {
        Console.print(`최종 우승자 : ${winners.join(', ')}`);
    }
}