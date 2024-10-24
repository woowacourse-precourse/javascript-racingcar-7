import IOHandler from "../utils/IOHandler.js";

class RaceManager {

    #carList;

    #racingCount;

    async #prepareRacing() {
        const inputStr = await IOHandler.input("경주할 자동차 이름을 입렿가세요.(이름은 쉼표(,) 기준으로 구분)\n");
        IOHandler.output(inputStr);
    }

    racing() {
        this.#prepareRacing();

    }


}

export default RaceManager;