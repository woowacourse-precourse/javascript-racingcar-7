import Car from './car.js';
import { Console } from '@woowacourse/mission-utils';

const printRaceResults = (cars) => {
    cars.forEach(car => {
        Console.print(`${car.name}: ${car.getPosition()}`);
    });
};
