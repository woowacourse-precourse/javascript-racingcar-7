import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, IO_MESSAGE } from '../constants/message.js';

async function Input() {
    let cars = await Console.readLineAsync(IO_MESSAGE.INPUT_CAR);
    cars = cars.split(',');
    if (cars.length < 2 || cars.some((car) => car.trim() === '' || car.length > 5)) {
        throw new Error(ERROR_MESSAGE.ERROR_CAR);
    }

    let tryCount = await Console.readLineAsync(IO_MESSAGE.INPUT_TRY);
    tryCount = Number(tryCount);
    if (isNaN(tryCount) || tryCount <= 0) {
        throw new Error(ERROR_MESSAGE.ERROR_TRY);
    }

    return { cars, tryCount };
}

export default Input;
