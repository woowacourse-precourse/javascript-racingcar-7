import { Console } from '@woowacourse/mission-utils';

export async function inputCarNames() {
    return new Promise((resolve) => {
        Console.readLine('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n', resolve);
    }).then((input) => input.split(',').map((name) => name.trim()));
}
