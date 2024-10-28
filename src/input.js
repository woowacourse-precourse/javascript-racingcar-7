import { Console } from "@woowacourse/mission-utils";

class Input {
    async getCarNames() {
        const input = await Console.readLineAsync(
            '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
        );
        const carNames = input.split(',').map((carName) => this.isValidCarName(carName));

        if (carNames.length < 2) {
            throw new Error('[ERROR] 자동차 이름은 2개 이상 입력해야 합니다.');
        }

        return carNames;
    }

    async getGameRound() {
        const input = await Console.readLineAsync(
            '시도할 횟수는 몇 회인가요?\n'
        );
        return this.isValidGameRound(input);
    }

    isValidCarName(carName) {
        if (!carName || carName.trim() === '') {
            throw new Error('[ERROR] 자동차 이름은 비어 있을 수 없습니다.');
        }
        if (carName.length > 5) {
            throw new Error('[ERROR] 자동차 이름은 5자 이하이어야 합니다.');
        }
        if (/[^a-zA-Z0-9]/.test(carName)) {
            throw new Error('[ERROR] 자동차 이름에는 특수 문자가 포함될 수 없습니다.');
        }
        return carName.trim();
    }

    isValidGameRound(input) {
        const gameRound = Number(input);
        if (gameRound <= 0) {
            throw new Error('[ERROR] 게임 시행 횟수는 양의 정수로 입력해야 합니다.');
        }
        if (isNaN(gameRound)) {
            throw new Error('[ERROR] 게임 시행 횟수는 올바른 숫자로 입력해야 합니다.');
        }
        return gameRound;
    }
}

export default Input;