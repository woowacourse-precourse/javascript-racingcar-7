  import Car from "./Car.js";
  import OutputUtils from "../Utils/OutputUtils.js";
  
  export default class RacingGame {

    constructor(carNameList, tryNumber) {
        this.cars = carNameList.map(carName => new Car(carName));
        this.tryNumber = tryNumber;
    }

    start() {

        OutputUtils.printIntro();

        for (let i = 0; i < this.tryNumber; i++) {
            this.cars.forEach(car => {
                car.move();
            });
            OutputUtils.printNowRacing(this.cars);
        }
        OutputUtils.printWinner(this.cars);
    }
  }
  
