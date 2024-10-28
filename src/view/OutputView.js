import { Console } from "@woowacourse/mission-utils";

class OutputView {
    printGameStart() {
        Console.print("\n실행 결과");
    }

    printRoundResult(positions) {
        positions.forEach(({ name, position }) => {
            Console.print(`${name} : ${'-'.repeat(position)}`);
        });
        Console.print('');
    }

    printWinners(winners) {
        Console.print(`최종 우승자 : ${winners.join(', ')}`);
    }
}

export default OutputView;