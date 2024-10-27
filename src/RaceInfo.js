import { INPUT_ERROR } from "./constant.js";

class RaceInfo {
    #carNames;
    #round;
    constructor(rawCarNames, rawRound) {
        this.carNames = rawCarNames;
        this.round = rawRound;
    }
    set carNames(rawCarNames) {
        const carNameList = rawCarNames.split(",");
        if (carNameList.length < 1) throw new Error(INPUT_ERROR);

        const trimedCarNames = carNameList.map((carName) => carName.trim());

        const uniqueCarNames = new Set(trimedCarNames);
        const uniqueCarNamesList = [...uniqueCarNames];
        if (trimedCarNames.length !== uniqueCarNamesList.length)
            throw new Error(INPUT_ERROR);

        this.#carNames = uniqueCarNamesList;
    }
    get carNames() {
        return this.#carNames;
    }

    set round(rawRound) {
        const round = rawRound / 1;
        if (isNaN(round)) throw new Error(INPUT_ERROR);

        this.#round = round;
    }
    get round() {
        return this.#round;
    }
}

export default RaceInfo;
