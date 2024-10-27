import { Console, Random } from '@woowacourse/mission-utils';
import { printStage, printWinners } from './inout.js';

function moveOrNot() {
    const randomDigit = Random.pickNumberInRange(0, 9);

    if (randomDigit >= 4) return 1;
    else return 0;
}

export function playerMovingState(carMap) {
    for (const car of carMap.keys()) {
        carMap.set(car, carMap.get(car) + moveOrNot());
    }
    return carMap;
}

function checkWinners(carMap) {
    let carArray = [];
    let maxVal = 0;
    // 최고점 체크
    for (const car of carMap.keys()) {
        if (carMap.get(car) >= maxVal)
            maxVal = carMap.get(car);
    }

    // 우승자 배열에 담기
    for (const car of carMap.keys()) {
        if (carMap.get(car) == maxVal)
            carArray.push(car);
    }

    return carArray;
}

export function startRacing(carArray, count) {

    let raceMap = new Map();
    for (let car of carArray) {
        raceMap.set(car, 0);  // 각 차의 이름을 키로 설정하고 초기값 0으로 설정
    }

    Console.print("\n실행 결과");
    for (let i = 0; i < count; i++) {
        raceMap = playerMovingState(raceMap);  // 각 턴마다 자동차 상태 업데이트
        printStage(raceMap);
    }
    printWinners(checkWinners(raceMap));
}