import { Console } from '@woowacourse/mission-utils';

class InputHandler {
    async getCarNames() {
        const carNames = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
        if (carNames === '') {
            throw new Error('[ERROR] 경주 하려면 자동차가 2대 이상 필요해요!');
        } else {
            return this.splitCars(carNames);
        }
    }

    splitCars(carNames) {
        const names = carNames.split(',');
        const hasEmptyName = names.some(car => car === '');
        const nameTooLong = names.some(car => car.length > 5);
        const notEnoughCars = names.length < 2;
        const hasDuplicates = new Set(names).size !== names.length;

        if (hasEmptyName) {
            throw new Error('[ERROR] 누군가 참가용지에 이름을 쓰지 않았습니다!');
        } else if (nameTooLong) {
            throw new Error('[ERROR] 자동차 이름은 5자 이하로 입력해주세요!');
        } else if (notEnoughCars) {
            throw new Error('[ERROR] 경주 하려면 자동차가 2대 이상 필요해요!');
        } else if (hasDuplicates) {
            throw new Error('[ERROR] 중복된 자동차 이름이 있어요!');
        } else {
            return names;
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