import { Console } from '@woowacourse/mission-utils';

const GRAPH = "-";

export async function getCarsInfo() {
    const input = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");

    if (!input || input.trim() === "") {
        throw new Error("[ERROR] 유효하지 않은 입력입니다.");
    }

    const carArray = input.split(",").map(car => car.trim()); // 공백제거하여 추가

    for (const car of carArray) {
        if (car.length == 0 || car.length > 5) {
            throw new Error("[ERROR] 유효하지 않은 입력입니다.");
        }
    }

    return carArray;
}

export async function getCountInfo() {
    const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

    if (!input || input.trim() === "") {
        throw new Error("[ERROR] 유효하지 않은 입력입니다.");
    }

    const count = parseInt(input.trim(), 10);  // 입력값을 10진수 정수로 변환

    if (isNaN(count) || count <= 0) {
        throw new Error("[ERROR] 유효하지 않은 입력입니다.");
    }

    return count;
}

export function printStage(carMap) {
    for (const car of carMap.keys()) {
        Console.print(`${car} : ${GRAPH.repeat(carMap.get(car))}`);
    }
    Console.print("");
}

export function printWinners(winnerArray) {
    Console.print("최종 우승자 : " + winnerArray.join(', '));
}