import {Console} from '@woowacourse/mission-utils'

export function printProgress(carObject) {
    carObject.forEach(car => {
        const progress = '-'.repeat(car.distance);
        Console.print(`${car.name} : ${progress}`);
    });
}