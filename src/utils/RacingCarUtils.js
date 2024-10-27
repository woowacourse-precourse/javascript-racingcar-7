import {Console} from '@woowacourse/mission-utils';
import RacingCar from "../RacingCar.js";

class RacingCarUtils {
    static findWinners(carList) {
        if (carList.length <= 0) return "";

        carList.sort((a, b) => b.getDistance() - a.getDistance())

        const maxDist = carList[0].getDistance();
        return carList.filter(car => car.getDistance() === maxDist)
            .map(car => car.name);
    }

    static createCarListByPlayerList(players) {
        return players.reduce((cars, player) => {
            cars.push(new RacingCar(player));
            return cars;
        }, []);
    }
}

export default RacingCarUtils;