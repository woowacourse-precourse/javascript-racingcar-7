import IOHandler from "./utils/IOHandler.js";
import datas from "./datas/datas.js";
import {Console} from '@woowacourse/mission-utils';
import RacingCarUtils from "./utils/RacingCarUtils.js";


class App {
    async run() {
        const playerList = await IOHandler.getInput(datas.INSTRUCTION_CARS, (str) => str.split(','))
        let carList = RacingCarUtils.createCarListByPlayerList(playerList);

        const tryNumber = await IOHandler.getInput(datas.INSTRUCTION_TRY_NUMBER)

        Console.print("\n실행결과")
        carList = RacingCarUtils.race(RacingCarUtils.deepCopy(carList), tryNumber);
        const winners = RacingCarUtils.findWinners(carList).join(', ')
        Console.print("최종 우승자 : " + winners)
    }
}

export default App;
