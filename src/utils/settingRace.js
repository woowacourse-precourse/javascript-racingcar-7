import Car from "../models/Car";

export default function settingRace(carNames) {
    return carNames.map(carName => new Car(carName));
}