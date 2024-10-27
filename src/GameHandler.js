import { Console, Random } from "@woowacourse/mission-utils";

export async function runGame(cars, round) {
    Console.print('실행결과');

    let carPositions = initializePositions(cars);

    for (let i = 0; i < round; i++) {
        updatePositions(carPositions);
        printRoundResult(carPositions);
    }

    return;
}

// 차의 위치 초기화
function initializePositions(cars) {
    let position = {};
    cars.forEach(car => {
        position[car] = '';
    });

    return position;
}

// 차의 위치 업데이트
function updatePositions(carPositions) {
    for (const car in carPositions) {
        const randomNumber = Random.pickNumberInRange(0, 9);

        if (randomNumber >= 4) {
            carPositions[car] += '-'.repeat(randomNumber);
        }
    }
}

// 각 라운드의 결과 출력
function printRoundResult(carPositions) {
    for(const car in carPositions) {
        Console.print(`${car} : ${carPositions[car]}`)
    }
}