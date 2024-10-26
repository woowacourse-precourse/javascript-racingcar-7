import { Console } from "@woowacourse/mission-utils";

import checkAttemptCount from "../validation/checkAttemptCount.js";

export async function getAttemptCount() {
    const inputValue = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

    checkAttemptCount(inputValue);

    return Number(inputValue);
}