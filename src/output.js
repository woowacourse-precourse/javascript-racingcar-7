import {Console} from '@woowacourse/mission-utils'

export function printProgress(carsObject) {
    carsObject.forEach(car => {
        const progress = '-'.repeat(car.distance);
        Console.print(`${car.name} : ${progress}`);
    });
}

export function printResult(carsObject) {
    let maxDistance = 0;

    carsObject.forEach((car) => {
        maxDistance = Math.max(car.distance, maxDistance);
    });

    const winners = carsObject
        .filter((car) => car.distance === maxDistance)
        .map((car) => car.name);

    Console.print(`최종 우승자 : ${winners.join(',')}`);
}