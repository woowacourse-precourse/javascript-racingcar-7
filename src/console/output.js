import { Console } from '@woowacourse/mission-utils';
import { IO_MESSAGE } from '../constants/message.js';

function Output(result) {
    result = result.join(', ');
    Console.print(`${IO_MESSAGE.OUTPUT_WINNER} ${result}`);
}
export default Output;
