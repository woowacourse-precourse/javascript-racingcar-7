import { Console } from "@woowacourse/mission-utils"

export default class OutputUtils {

    static printNowRacing(cars) {
        cars.forEach(car => {
            Console.print(`${car.getName()} : ${'-'.repeat(car.getPosition())}`);
        });
        Console.print('');
    }

    static printWinner(cars) {
        const maxPosition = Math.max(...cars.map(car => car.getPosition()));
        const winners = cars.filter(car => car.getPosition() === maxPosition).map(car => car.getName());
        Console.print("최종 우승자 : " + winners.join(", "));
    }

    static printIntro() {
        Console.print("");
        Console.print("실행 결과");
    }
}