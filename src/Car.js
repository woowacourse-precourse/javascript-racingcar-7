import { MissionUtils } from '@woowacourse/mission-utils';

function Car(name) {
    this.name = name;
    this.position = 0;

    this.move = function () {
        if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
            position++;
        }
    }
}

export default Car;