import {Random, Console} from '@woowacourse/mission-utils';
import RacingCar from "../RacingCar.js";
import IOHandler from "./IOHandler.js";

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

    static race(carList, tryNumber) {
        while (tryNumber--) {
            carList.forEach(car => {
                car.goForward(Random.pickNumberInRange(0, 9))
                IOHandler.printCarDistance(car)
            })
            Console.print('') //개행
        }
        return carList;
    }

    static deepCopy(obj) {
        if (obj === null || typeof obj !== "object") {
            return obj;
        }

        if (Array.isArray(obj)) {
            return obj.map(this.deepCopy);
        }

        const copy = new RacingCar(obj.name, obj.distState);

        return copy
    }

}

export default RacingCarUtils;