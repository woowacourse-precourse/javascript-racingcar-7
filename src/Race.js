import { MissionUtils } from '@woowacourse/mission-utils';
import Car from "./Car.js";

class Race {
    constructor(carNames, moveCount) {
        const names = carNames.split(',').map(name => name.trim());

        // 이름이 5자 초과인 경우
        this.cars = names.map(name => {
            if (name.length > 5) {
                throw new Error("[ERROR] 자동차 이름은 5자 이내여야 합니다.");
            }
            return new Car(name);
        });

        // 이름이 중복되는 경우
        const isName = new Set(names);
        if (isName.size != names.length) {
            throw new Error("[ERROR] 자동차 이름은 중복될 수 없습니다.");
        }

        this.moveCount = moveCount;
    }

    // 각 라운드 결과
    displayRoundResult() {
        this.cars.forEach(car => MissionUtils.Console.print(car.moveForward()));
        MissionUtils.Console.print('');
    }

    // 우승자 
    getWinners() {
        const maxPosition = Math.max(...this.cars.map(car => car.position));
        const winners = this.cars.filter(car => car.position === maxPosition);
        return winners.map(car => car.name).join(', ');
    }
    
    // 최종 결과
    showResult() {
        for(let i = 0; i < this.moveCount; i++) {
            this.cars.forEach(car => car.move());
            this.displayRoundResult();
        }
        MissionUtils.Console.print(`최종 우승자 : ${this.getWinners()}`);
    }

}

export default Race;