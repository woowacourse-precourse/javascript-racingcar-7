import { MissionUtils } from "@woowacourse/mission-utils";

class Print {
    resultText() {
        MissionUtils.Console.print('\n실행 결과\n');
    }

    brText() {
        MissionUtils.Console.print('\n');
    }

    roundText(car, cars) {
        MissionUtils.Console.print(`${car} : ${'-'.repeat(cars[car])}`);
    }

    winnerText(winners) {
        MissionUtils.Console.print(`최종 우승자 : ${winners.join(', ')}`);
    }
}

export default Print;