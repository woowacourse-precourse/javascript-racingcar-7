import { Console } from '@woowacourse/mission-utils'
import { showProgressing, gameMessage } from './constants.js';

export default class ViewOutput {
    
    static printProgressResult(carList) {
        carList.forEach(car => {
            this.printProgressDash(car.getName(), car.getProgress());
        });
    }

    static printProgressDash(carName, carProgress) {
        let progressBar = `${carName} : `;
        for(let i = 1; i<=carProgress;i++) {
            progressBar += `${showProgressing.progressBar} `;
        }
        Console.print(progressBar);
    }

    static printExecutionResult() {
        Console.print(gameMessage.runResultMessage);
    }

    static printWinner(winnerList) {
        const winnerNames = winnerList.join(", ");
        Console.print(`${gameMessage.finalWinnerMessage}${winnerNames}`);
    }
}