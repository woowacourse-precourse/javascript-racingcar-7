import { Console } from "@woowacourse/mission-utils";

export async function getCarsName() {
    const userInput = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    return userInput;
}

export async function getAttemptNumber() {
    const userInput = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    return Number(userInput);
}