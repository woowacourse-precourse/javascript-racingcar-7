import Car from "./Car.js";

class Cars {
    #cars;

    constructor(names) {
        this.#cars = names.map(name => new Car(name));
    }

    moveCars(numbers) {
        this.#cars.forEach((car, index) => car.move(numbers[index]));
    }

    getCarPositions() {
        return this.#cars.map(car => ({
            name: car.getName(),
            position: car.getPosition()
        }));
    }

    findWinners() {
        const maxPosition = Math.max(...this.#cars.map(car => car.getPosition()));
        return this.#cars
            .filter(car => car.getPosition() === maxPosition)
            .map(car => car.getName());
    }
}

export default Cars;