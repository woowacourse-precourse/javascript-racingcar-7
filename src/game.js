import { Console, Random } from "@woowacourse/mission-utils";

class Game {
    async runRacingGame(carList, gameRound) {
        this.carList = carList;
        this.gameRounds = Array(carList.length).fill(0);

        Console.print('');
        Console.print('실행 결과');

        Array.from({ length: gameRound }).forEach(() => {
            this.moveCars();
            this.printGameRounds();
        });

        return this.gameRounds;
    }

    moveCars() {
        this.carList.map((car, index) => {
            const randomValue = Random.pickNumberInRange(0, 9);
            if (this.moveCar(randomValue)) {
                this.gameRounds[index]++;
            }
        });
    }

    moveCar(randomValue) {
        return randomValue >= 4;
    }

    printGameRounds() {
        this.carList.forEach((car, index) => {
            Console.print(`${car} : ${'-'.repeat(this.gameRounds[index])}`);
        });
        Console.print('');
    }
}

export default Game;