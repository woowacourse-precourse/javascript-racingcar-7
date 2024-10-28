import Car from './car.js';
import { Console } from '@woowacourse/mission-utils';

const printRaceResults = (cars) => {
    cars.forEach(car => {
        Console.print(`${car.name}: ${car.getPosition()}`);
    });
};
const determineWinners = (cars) => {
    const maxPosition = Math.max(...cars.map(car => car.position));
    return cars.filter(car => car.position === maxPosition).map(car => car.name);
};

export const startRace = (carNames, moveCount) => {
    const cars = carNames.map(name => new Car(name));

    Console.print("실행 결과");

    for (let round = 1; round <= moveCount; round++) {
        if (round > 1) {
            Console.print(""); // 줄 바꿈
        }
        // 각 자동차의 move 메서드를 호출하고 상태를 출력
        cars.forEach(car => car.move());
        printRaceResults(cars); // 자동차 상태 출력
    }

    // 우승자 결정
    const winners = determineWinners(cars);
    Console.print(`\n최종 우승자: ${winners.join(', ')}`);
};