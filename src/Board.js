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
}