import { Console } from "@woowacourse/mission-utils";
export default class Board{
    constructor(cars) {
        this.cars = cars;
    }

    boardStartSentence(){
        Console.print("실행 결과\n");
    }

    printRaceBoard(){
        this.printRoundBoard();
        Console.print("\n");
    }

    printRoundBoard(){
        this.cars.forEach(car => {
            Console.print(this.statusChangeDash(car.getName(), car.getState()));
        })
    }

    statusChangeDash(car, raceStatus){
        const dash = "-".repeat(raceStatus);
        return `${car} : ${dash}`;
    }

    getWinner(){
        const maxCurrent = this.getWinnerCurrent();
        const winner = this.findWinner(maxCurrent);
        const winnerName = this.getWinnerName(winner);
        return this.winnerPrintMethod(winnerName);
    }
    getWinnerCurrent(){
        return Math.max(...this.cars.map(car => car.getState()));
    }
    findWinner(maxCurrent){
        return this.cars.filter(car => car.getState() === maxCurrent);
    }
    getWinnerName(winner){
        return winner.map(car => car.getName());
    }
    winnerPrintMethod(winnerName){
        return winnerName.join(", ");
    }
    printWinner(){
        Console.print(`최종 우승자 : ${this.getWinner()}`);
    }
}