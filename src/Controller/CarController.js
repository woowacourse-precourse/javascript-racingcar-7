import RandomNum from '../utils/RandomNum.js';
import Car from '../Model/Car.js';

export default class CarController {

    static createCar(carNameList) {
        return carNameList.map((carName) => new Car(carName));
    }

    // 차의 위치 변경 함수
    static upgradeCarProgress(carList) {
        carList.forEach(car => {
            const random = RandomNum.getRandomNumber();
            if(random >= 4)
                car.updateProgress(random);
        });
    }

    // 최종 우승자 선정
    static finalWinner(carList, maxProgress) {
        return carList.filter((car) => car.getProgress() === maxProgress)
        .map((car) => car.getName());
    }
}