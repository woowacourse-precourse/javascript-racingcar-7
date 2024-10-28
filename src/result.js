import { Console } from "@woowacourse/mission-utils";

class Result {
    getWinner(carList, gameRounds) {
        const gameWinner = Math.max(...gameRounds);
        return carList.filter((car, index) => gameRounds[index] === gameWinner);
    }

    printWinner(carList, gameRounds) {
        const result = this.getWinner(carList, gameRounds);
        Console.print(`최종 우승자 : ${result.join(', ')}`);
    }
}

export default Result;