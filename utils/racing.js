import { Console, Random } from '@woowacourse/mission-utils';

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