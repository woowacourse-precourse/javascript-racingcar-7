import { Random } from "@woowacourse/mission-utils";

class Race {
    #carNames;
    #round;
    constructor(carNames, round) {
        this.#carNames = carNames;
        this.#round = round;
    }

    result() {
        const raceState = [];

        while (raceState.length < this.#round) {
            const prevState = { ...raceState[raceState.length - 1] };

            const playResult = this.play(prevState);
            raceState.push(playResult);
        }
        return raceState;
    }

    play(prevState) {
        for (let i = 0; i < this.#carNames.length; i++) {
            const randomNumber = Random.pickNumberInRange(0, 9);

            if (randomNumber >= 4) {
                prevState[this.#carNames[i]] =
                    1 + (prevState[this.#carNames[i]] ?? 0);
                continue;
            }
            prevState[this.#carNames[i]] = prevState[this.#carNames[i]] ?? 0;
        }
        return prevState;
    }
}

export default Race;
