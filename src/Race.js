import Car from "./Car.js";

class Race {
    constructor(carNames, moveCount) {
        this.cars = carNames.split(',').map(name => new Car(name.trim()));
        this.moveCount = moveCount;
    }

    // 각 라운드 결과
    displayRoundResult() {
        this.cars.forEach(car => MissionUtils.Console.print(car.moveForward()));
        MissionUtils.Console.print('');
    }

    // 우승자 
    getWinners() {
        const maxPosition = Math.max(...this.cars.map(car => car.position));
        const winners = this.cars.filter(car => car.position === maxPosition);
        return winners.map(car => car.name).join(', ');
    }
    
}

export default Race;