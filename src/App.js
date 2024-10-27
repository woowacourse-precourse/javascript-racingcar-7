import IOHandler from "./utils/IOHandler.js";
import datas from "./datas/datas.js";
import RacingCar from "./RacingCar.js";
import {Random, Console} from '@woowacourse/mission-utils';
import RacingCarUtils from "./utils/RacingCarUtils.js";


class App {
    async run() {
        const playerList = await IOHandler.getInput(datas.INSTRUCTION_CARS, (str) => str.split(','))
        const carList = RacingCarUtils.createCarListByPlayerList(playerList);

        let tryNumber = await IOHandler.getInput(datas.INSTRUCTION_TRY_NUMBER)

        Console.print("\n실행결과")
        while (tryNumber--) {
            carList.forEach(car => {
                car.goForward(Random.pickNumberInRange(0, 9))
                IOHandler.printCarDistance(car)
            })
            Console.print('') //개행
        }

        Console.print("최종 우승자 : " + RacingCarUtils.findWinners(carList).join(', '))
    }
}

export default App;
