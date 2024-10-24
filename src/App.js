import { Console } from '@woowacourse/mission-utils';
import NameValidation from './utils/NameValidation.js';
import NumValidation from './utils/NumValidation.js';
import Car from './utils/Car.js';

class App {
  async run() {
    const carInput = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    );
    const isNameValid = NameValidation.isValid(carInput.trim());
    const countInput = await Console.readLineAsync('시도횟수를 입력해주세요.');
    const isNumValid = NumValidation.isValidNum(countInput.trim());
    if (isNameValid && isNumValid) {
      const carList = carInput.split(',').map(name => new Car(name));

      for (let i = 0; i < countInput; i++) {
        carList.forEach(car => {
          car.move();
          Console.print(car.getPosition());
        });
      }
    }
  }
}

export default App;
