import IOHandler from "./utils/IOHandler.js";
import datas from "./datas/datas.js";
import RacingCar from "./RacingCar.js";
import {Random} from '@woowacourse/mission-utils';

class App {
    async run() {
        const players = await IOHandler.getInput(datas.INSTRUCTION_CARS, (str) => str.split(','))

        let carList = []
        players.forEach((player) => {
            carList.push(new RacingCar(player))
        })

        let tryNumber = await IOHandler.getInput(datas.INSTRUCTION_TRY_NUMBER)

        while (tryNumber--) {
            carList.forEach(car => {
                car.goForward(Random.pickNumberInRange(0, 9))
            })
        }

    }
}

export default App;
