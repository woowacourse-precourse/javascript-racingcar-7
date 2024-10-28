import { MissionUtils } from "@woowacourse/mission-utils";
import Print from "./Print.js";

class Car {
    constructor(carsInput, tryInput) {
        this.car = carsInput;
        this.try = tryInput;
    }

    startRounds() {
        this.print = new Print();
        for (let i = 0; i < this.try; i++) {
            for (const car in this.car) {
                this.advance(car);
                this.print.roundText(car, this.car);
            }
            this.print.brText();
        }
    }

    advance(car) {
        let advanceChance = MissionUtils.Random.pickNumberInRange(0, 9);
        if (advanceChance >= 4) {
            this.car[car] += 1;
        }
    }

    winner() {
        const maxAdvance = Math.max(...Object.values(this.car));
        const winners = Object.keys(this.car).filter(car => this.car[car] === maxAdvance);
        return winners;
    }
}

export default Car;