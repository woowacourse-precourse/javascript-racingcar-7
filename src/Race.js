import { moveCar } from './utils/moveCar';
import Car from './Car'; 

export default class Race {
    constructor(carNames, attempts) {
        this.cars = carNames.map(name => new Car(name)); 
        this.attempts = attempts; 
    }

    play() {
        const currentPositions = []; 

        for (let i = 0; i < this.attempts; i++) {
            this.cars.forEach(car => {
                const isMoving = moveCar();
                car.move(isMoving); 
            });
            const positions = this.printCurrentPositions();
            currentPositions.push(...positions); 
        }

        return {
            winners: this.getWinners(),
            currentPositions 
        };
    }

    printCurrentPositions() {
        return this.cars.map(car => {
            return `${car.name} : ${'-'.repeat(car.position)}`;
        });
    }

    getWinners() {
        const maxPosition = Math.max(...this.cars.map(car => car.position)); 
        return this.cars.filter(car => car.position === maxPosition).map(car => car.name); 
    }
}