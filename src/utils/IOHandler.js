import {Console} from '@woowacourse/mission-utils';
import RacingCar from "../RacingCar.js";

class IOHandler {
    static async getInput(instruction, processInput = (x) => x) {
        const input = await Console.readLineAsync(instruction)
        return processInput(input)
    }

    static printCarDistance(car) {
        Console.print(car.name + " : " + car.distance);
    }
}

export default IOHandler

