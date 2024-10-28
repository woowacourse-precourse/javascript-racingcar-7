export default class CarController {

    static createCar(carNameList) {
        return carNameList.map((carName) => new Car(carName));
    }
}