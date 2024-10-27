import { Console } from "@woowacourse/mission-utils";

class OutputView {
    displayRoundResults(results) {
        results.forEach(result => {
            Console.print(`${result.name} : ${"-".repeat(result.position)}`);
        });
    }

    displayWinners(winners) {
        Console.print(`최종 우승자 : ${winners.join(", ")}`);
    };
}

export default OutputView;
