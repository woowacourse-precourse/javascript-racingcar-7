export default class Calculator {
    static getMax(carList) {
        return Math.max(...carList.map(car => car.getProgress()));
    }
}