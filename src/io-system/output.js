import { Console } from "@woowacourse/mission-utils";
import { IO_MESSAGE } from "../constants/message";

function Output(winners, currentPositions) {
    Console.print(IO_MESSAGE.OUTPUT_RESULT);
    
    if (currentPositions && currentPositions.length > 0) {
        currentPositions.forEach(position => {
            Console.print(position);
        });
    } 

    const result = winners.join(', ');
    Console.print(`${IO_MESSAGE.OUTPUT_WINNER} ${result}`);
}

export default Output;