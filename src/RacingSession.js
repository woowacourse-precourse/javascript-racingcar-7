import { MissionUtils } from '@woowacourse/mission-utils';
import RaceCar from './RaceCar.js'

class RacingSession {
    // 자동차 이름과 시도 횟수를 받아 각 자동차 객체를 생성하고 시도 횟수를 저장
    constructor(carNames, attempts) {
        this.cars = carNames.map(name => new RaceCar(name));
        this.attempts = attempts;
    }

    // 시도 횟수만큼 반복하여 경주를 진행, 각 시도에서 자동차의 이동 상태를 출력합니다.
    startRace() {
        MissionUtils.Console.print('\n실행 결과');
        for (let i = 0; i < this.attempts; i++) {
            this.cars.forEach(car => {
                car.move();
                let positionDisplay = '-'.repeat(car.position); // 현재 위치 표시
                MissionUtils.Console.print(`${car.name} : ${positionDisplay}`);
            });
            MissionUtils.Console.print('')
        }
        this.announceWinner();
    }

    //최종 우승자를 판단하고 결과를 출력
    announceWinner() {
        const maxPosition = Math.max(...this.cars.map(car => car.position));
        const winners = this.cars.filter(car => car.position === maxPosition).map(car => car.name);
        MissionUtils.Console.print(`\n최종 우승자 : ${winners.join(', ')}`);
    }
}
export default RacingSession;
