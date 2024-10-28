import Random from '@woowacourse/mission-utils/Random';

class Car {
    constructor(name) {
        this.name = name;
        this.position = 0;
    }

    move() {
        if (Random.pickNumberInRange(0, 9) >= 4) {
            this.position += 1;
        }
    }

    getPosition() {
        return '-'.repeat(this.position);
    }
}

export default Car;