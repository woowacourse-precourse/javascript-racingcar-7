import IOHandler from "./utils/IOHandler.js";
import datas from "./datas/datas.js";
import RacingCar from "./RacingCar.js";

class App {
    async run() {
        const players = await IOHandler.getInput(datas.INSTRUCTION_CARS, (str) => str.split(','))

        let carList = []
        players.forEach((player) => {
            carList.push(new RacingCar(player))
        })

        const tryNumber = await IOHandler.getInput(datas.INSTRUCTION_TRY_NUMBER)
    }
}

export default App;
