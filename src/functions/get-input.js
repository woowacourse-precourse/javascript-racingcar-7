import { Console } from '@woowacourse/mission-utils';

async function getCarName() {
    const input = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
}

async function getTryNumber() {
    const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
}

export { getCarName, getTryNumber };