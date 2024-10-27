import { Console } from "@woowacourse/mission-utils";

import checkCnt from "../validation/checkCnt.js";

export default function findMoveLonger(carMoveObj) {
    const counts = {
        maxCnt: 0, // 가장 많이 이동한 횟수
        moveLonger: [], // 현재까지 가장 많이 이동한 자동차 저장용 배열
        cnt: 0, // 현재 자동차의 이동 횟수
    };

    for (let key in carMoveObj) {
        counts.cnt = carMoveObj[key].length;

        checkCnt(counts, key);
    }

    Console.print(`가장 많이 이동한 자동차 : ${counts.moveLonger.join(', ')}`);
}