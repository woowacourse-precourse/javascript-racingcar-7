import IOHandler from "./utils/IOHandler.js";
import datas from "./datas/datas.js";
import RacingCar from "./RacingCar.js";
import {Random, Console} from '@woowacourse/mission-utils';

class App {
    async run() {
        const players = await IOHandler.getInput(datas.INSTRUCTION_CARS, (str) => str.split(','))

        let carList = []
        players.forEach((player) => {
            carList.push(new RacingCar(player))
        })

        let tryNumber = await IOHandler.getInput(datas.INSTRUCTION_TRY_NUMBER)

        Console.print("\n실행결과")
        while (tryNumber--) {
            carList.forEach(car => {
                car.goForward(Random.pickNumberInRange(0, 9))
                IOHandler.printCarDistance(car)
            })
            Console.print('') //개행
        }

        carList.sort((a, b) => b.getDistance() - a.getDistance())
    }
}

export default App;
