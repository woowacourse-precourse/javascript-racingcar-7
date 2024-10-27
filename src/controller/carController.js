import { Console } from "@woowacourse/mission-utils";
import Validate from "../utils/validate.js";
import UserView from "../View/UserView.js";
import { MESSAGE } from "../constants/message.js";
import CarModel from "../model/carModel.js";

class CarController{
  constructor() {
    this.Error = new Validate();
    this.print = new UserView();
    this.carModel = new CarModel();
  }

  async raceStart() {
    await this.inputCarList();
    await this.inputCount();

    await this.moveforward();
    const winner = this.carModel.getWinner();
    this.print.printWinner(winner);
  }

  async inputCarList() {
    const carString = await Console.readLineAsync(MESSAGE.CAR_NAME_INPUT);
    this.Error.carValidate(carString);
    const carNames = carString.split(',');
    carNames.forEach((name) => {
      this.carModel.addCar(name.trim());
    })
  }

  async inputCount() {
    const count = await Console.readLineAsync(MESSAGE.COUNT_INPUT);
    this.Error.countValidate(count);
    this.carModel.setCount(parseInt(count, 10));
  }

  async moveforward() {
    Console.print(MESSAGE.OUTPUT);
    for (let i=0; i<this.carModel.count; i++){
        this.carModel.moveCars();
        this.carModel.carList.forEach(car => {
          this.print.printProgress(car, this.carModel.distance.get(car));
        });
        Console.print('');
    }
  }
}

export default CarController;