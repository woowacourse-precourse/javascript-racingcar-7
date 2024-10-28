import { Random } from '@woowacourse/mission-utils';
import { printEmptyLine, printHeader, printRaceResult, printWinner } from './functions/print-output.js';

class Race {

    raceCar(tryNumber, carList, positionList) {
        printHeader();

        for (let i = 0; i < tryNumber; i++) {
            this.getRaceResult(carList, positionList);
        }
        
        const winner = this.findWinner(carList, positionList);
        printWinner(winner);
    }

    getRaceResult(carList, positionList) {
        carList.forEach((car, idx) => {
            if (this.moveForward()) {
                positionList[idx] += 1;
            }
            printRaceResult(car, positionList[idx]);
        });

        printEmptyLine();
    }

    moveForward() {
        const randomNum = Random.pickNumberInRange(0, 9);
        return randomNum >= 4;
    }

    findWinner(carList, positionList) {
        const maxPosition = this.getMaxPosition(positionList);
        return this.getWinner(carList, positionList, maxPosition);
    }

    getMaxPosition(positionList) {
        return Math.max(...positionList);
    }

    getWinner(carList, positionList, maxPosition) {
        return carList.filter((_, index) => positionList[index] === maxPosition);
    }
}

export default Race;