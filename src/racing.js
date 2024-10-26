import { Console } from '@woowacourse/mission-utils';
import { IO_MESSAGE } from './constants/message.js';
import StopOrGo from './utils/stopOrGo.js';

function Racing(cars, tryCount) {
    let carMap = new Map(cars.map((car) => [car, 0])),
        count = 0;

    Console.print(`\n${IO_MESSAGE.OUTPUT_RESULT}`);
    while (count !== tryCount) {
        cars.map((car) => {
            let result = StopOrGo();
            let sum = carMap.get(car) + result;
            carMap.set(car, sum);
            let marks = '-'.repeat(sum);
            Console.print(`${car} : ${marks}`);
        });

        Console.print('');
        count++;
    }

    let maxValue = Math.max(...carMap.values());
    let winners = [...carMap.entries()]
        .filter(([key, val]) => val === maxValue)
        .map(([key]) => key);

    return winners;
}
export default Racing;
