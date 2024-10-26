import InputView from '../views/InputView.js';
import CarParser from '../utils/CarParser.js';

class Controller {
  static async run() {
    const carInput = await InputView.readCarInput();
    const gameInput = await InputView.readGameInput();
    // car 객체 생성
    const carList = CarParser.splitCar(carInput);
    // 객체 생성 테스트
    // carList.forEach(car => {
    //   console.log(car.name);
    //   console.log(car.distance);
    // });
  }
}

export default Controller;
