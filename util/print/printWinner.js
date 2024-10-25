import { Console } from "@woowacourse/mission-utils";

export default function printWinner(winners, carMoveHashMap) {
    if (winners.length === 0) {
        Console.print('우승자가 가려지지 않았습니다.');

        let maxCnt = 0;
        let maxKey = '';
        let moveLonger = [];

        for (let key in carMoveHashMap) {
            const cnt = carMoveHashMap[key].filter((val) => val === '-').length;

            if (cnt > maxCnt) {
                moveLonger = [key];
                maxCnt = cnt;
                maxKey = key;
            } else if (cnt === maxCnt) {
                moveLonger.push(key);
            } else {
                continue;
            }
        }

        Console.print(`가장 많이 이동한 자동차 : ${moveLonger.join(', ')}`);

    } else {
        Console.print(`최종 우승자 : ${winners.join(', ')}`);
    }
}