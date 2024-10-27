import { MissionUtils } from '@woowacourse/mission-utils';
import Car from "./Car.js"


class RacingGame {
    async start() {
        let cars = [];

        const inputCarNames = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
        const inputNumberOfRounds = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

        const carNames = inputCarNames.trim().split(',')
        //경주할 자동차 이름대로 차의 객체 생성
        for (let i = 0; i < carNames.length; i++) {
            cars[i] = new Car(carNames[i]);
        }

    }
}

export default RacingGame;