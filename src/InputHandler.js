import { Console } from '@woowacourse/mission-utils';

class InputHandler {
    async getCarNames() {
        const input = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
        if (input === '') {
            throw new Error('[ERROR] 경주 하려면 자동차가 2대 이상 필요해요!');
        } else {
            return input;
        }
    }

    async getLaps() {
        const input = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
        const laps = Number(input);
        if (input === '') {
            throw new Error('[ERROR] 모든 참가자가 경주를 포기했습니다!');
        } else if (isNaN(laps)) {
            throw new Error('[ERROR] 숫자를 입력해주세요!');
        } else if (!Number.isInteger(laps)) {
            throw new Error('[ERROR] 1 이상의 정수를 입력해주세요!');
        } else if (laps < 0) {
            throw new Error('[ERROR] 경기 횟수는 0보다 작을 수 없어요!');
        } else {
            return laps;
        }
    }
}

export default InputHandler;