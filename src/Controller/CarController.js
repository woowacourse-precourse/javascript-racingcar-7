import RandomNum from '../utils/RandomNum.js';
import Car from '../Model/Car.js';

export default class CarController {

    static createCar(carNameList) {
        return carNameList.map((carName) => new Car(carName));
    }

    static upgradeCarProgress(carList) {
        carList.forEach(car => {
            const random = RandomNum.getRandomNumber();
            if(random >= 4)
                car.updateProgress(random);
        });
    }

    static finalWinner(carList, maxProgress) {
        return carList.filter((car) => car.getProgress() === maxProgress)
        .map((car) => car.getName());
    }
}