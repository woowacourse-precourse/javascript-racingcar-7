import { Random } from "@woowacourse/mission-utils";

class CarGame {
    carNames;
    tryCount;
    runCountInfo;

    constructor(carNames, tryCount) {
        this.carNames = carNames;
        this.tryCount = tryCount;
        this.runCountInfo = Array.from({ length: carNames.length }, () => Array(tryCount).fill(0));
        this.carCount = this.carNames.length;
    }

    startRace() {
        const resultLogs = [];
        let tryCnt = 0;
        while (tryCnt < this.tryCount) {
            for (let i = 0; i < this.carCount; i++) {
                const randomNumber = Random.pickNumberInRange(0, 9);
                if (randomNumber >= 4) {
                    this.runCountInfo[i][tryCnt] = 1;
                }
            }

            tryCnt++;
        }

        for (let i = 0; i < this.carCount; i++) {
            for (let j = 1; j < this.tryCount; j++) {
                this.runCountInfo[i][j] += this.runCountInfo[i][j - 1];
            }
        }

        for (let i = 0; i < this.tryCount; i++) {
            for (let j = 0; j < this.carCount; j++) {
                resultLogs.push(`${this.carNames[j]} : ${"-".repeat(this.runCountInfo[j][i])}`);
            }
            resultLogs.push("");
        }

        return resultLogs;
    }

    pickWinner() {
        let winner = [];
        let maxCnt = -1;
        for (let i = 0; i < this.carCount; i++) {
            const finalCnt = this.runCountInfo[i][this.tryCount - 1];
            if (maxCnt < finalCnt) {
                maxCnt = finalCnt;
                winner = [this.carNames[i]];
            } else if (maxCnt === finalCnt) {
                winner.push(this.carNames[i]);
            }
        }

        return winner;
    }
}

export default CarGame;
