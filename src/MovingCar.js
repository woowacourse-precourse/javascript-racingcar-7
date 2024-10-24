import { Console } from "@woowacourse/mission-utils";

class MovingCar {
    startRace(cars, countNum) {
        Console.print("\n실행 결과");
        for (let i = 0; i < countNum; i++) {
            this.movingCar(cars);
        }
    }

    movingCar(cars) {
        cars.forEach(car => {
            car.carMove();
            Console.print(`${car.name} : ${'-'.repeat(car.distance)}`);
        });
        Console.print("");
    }

}

export default MovingCar;