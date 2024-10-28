import { printOutput } from "../handlers/IOHandler.js";

export default class Game {
    constructor(cars, moveCount) {
        this.cars = cars;
        this.moveCount = moveCount;
        this.winners = [];
    }

    run() {
        printOutput("\n실행 결과");
        while (this.winners.length === 0) {
            this.cars.forEach(car => {
                car.tryMove();

                if (car.isWinner(this.moveCount)) {
                    this.winners.push(car.name);
                }
            });

            printOutput(this.cars.reduce((str, car) => str + car.getState() + "\n", ""));
        }
        
        printOutput("최종 우승자 : " + this.winners.join(", "));
    }
}