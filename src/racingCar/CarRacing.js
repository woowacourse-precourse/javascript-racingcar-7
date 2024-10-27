import { Console } from "@woowacourse/mission-utils";
import Car from "./Car.js";
import HandleIo from "./HandleIo.js";
import ErrorChecker from "../checker/ErrorChecker.js";

class CarRacing {
    async run() {

        const handleinput = new HandleIo();
        const { nameInput, tryCount } = await handleinput.getInput();

        this.startRacing(nameInput, tryCount);
    };

    startRacing(nameInput, tryCount) {

        const cars = this.createCar(nameInput);

        if (!cars) return;

        ErrorChecker.checkTryCount(tryCount);

        for (let i = 0; i < tryCount; i++) {
            cars.forEach(car => car.move());
            Console.print("\n");
        };

        this.checkWinner(cars);
    };

    createCar(input) {
        const cars = input.split(',').map((name) => {
            name = name.trim();
            ErrorChecker.checkNameLength(name);
            return new Car(name);
        });
        return cars;
    };

    checkWinner(cars) {
        let bestScore = 0;
        let winner = [];

        for (let i = 0; i < cars.length; ++i) {
            const car = cars[i];
            if (car.position > bestScore) {
                bestScore = car.position;
                winner = [car.name];
            } else if (car.position === bestScore) {
                winner.push(car.name);
            };
        };
        
        Console.print("\n실행 결과");
        Console.print("최종 우승자 : " + winner.join(', '));
    };
};

export default CarRacing;