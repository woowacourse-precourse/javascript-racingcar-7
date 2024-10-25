import Car from "../models/Car.js";

export default function settingRace(carNames) {
    return carNames.map(carName => new Car(carName));
}