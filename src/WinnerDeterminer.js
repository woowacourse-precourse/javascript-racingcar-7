import { Console } from "@woowacourse/mission-utils";

class WinnerDeterminer {
    #carList;

    constructor(carList) {
        this.#carList = carList;
    }

    #findWinners() {
        const maxPosition = Math.max(...this.#carList.map((car) => car.position));
        return this.#carList.filter((car) => car.position === maxPosition);
    }

    printWinners() {
        const winners = this.#findWinners();
        const winnerNames = winners.map((car) => car.name).join(", ");
        Console.print(`최종 우승자 : ${winnerNames}`);
    }
}

export default WinnerDeterminer;
