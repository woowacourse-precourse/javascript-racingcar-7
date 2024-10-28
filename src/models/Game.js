export default class Game {
    constructor(cars, moveCount) {
        this.cars = cars;
        this.moveCount = moveCount;
        this.winners = [];
    }

    run() {
        console.log("\n실행 결과");
        while (this.winners.length === 0) {
            this.cars.forEach(car => {
                car.tryMove();

                if (car.isWinner(this.moveCount)) {
                    this.winners.push(car.name);
                }
            });

            const print = this.cars.reduce((print, car) => print + car.getState() + "\n", "");

            console.log(print + "\n");
        }
    }
}