import { Console } from "@woowacourse/mission-utils";

export default function printWinner(winners) {
    if (winners.length === 0) {
        Console.print('우승자가 가려지지 않았습니다.');

    } else {
        Console.print(`최종 우승자 : ${winners.join(', ')}`);
    }
}