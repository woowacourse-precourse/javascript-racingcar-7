import IOHandler from "./utils/IOHandler.js";
import datas from "./datas/datas.js";

class App {
    async run() {
        const players = await IOHandler.getInput(datas.INSTRUCTION_CARS, (str) => str.split(','))
        const tryNumber = await IOHandler.getInput(datas.INSTRUCTION_TRY_NUMBER)
    }
}

export default App;
