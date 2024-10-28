import { Console } from "@woowacourse/mission-utils"

export default class OutputUtils {

    static printNowRacing(cars) {
        cars.forEach(car => {
            Console.print(`${car.getName()} : ${'-'.repeat(car.getPosition())}`);
        });
        Console.print('');
    }

    static printWinner(cars) {

    }

    static printIntro() {
        Console.print("");
        Console.print("실행 결과");
    }
}