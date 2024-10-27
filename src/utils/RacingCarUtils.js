import {Console} from '@woowacourse/mission-utils';

class RacingCarUtils {
    static findWinners(carList) {
        if (carList.length <= 0) return "";

        carList.sort((a, b) => b.getDistance() - a.getDistance())

        const maxDist = carList[0].getDistance();
        return carList.filter(car => car.getDistance() === maxDist)
            .map(car => car.name);
    }
}

export default RacingCarUtils;