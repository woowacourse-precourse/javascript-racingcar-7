import { Random } from '@woowacourse/mission-utils';
import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    function splitUserInput(userInput) {
      return userInput.split(',').map(car => car.trim());
    }

    function addCar(car, raceCars) {
      if (car.length > 5) {
        console.log('error: 자동차 이름은 최대 5글자여야 합니다.');
        return false;
      }

      if (car in raceCars) {
        console.log(`중복된 참가자가 있습니다: "${car}"`);
        return false;
      }

      raceCars[car] = '';
      return true;
    }

    async function getRaceCar() {
      const userInput = await Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분, 최대 5글자, 공백 제외)\n'
      );

      const cars = splitUserInput(userInput);
      let raceCars = {};

      cars.forEach(car => addCar(car, raceCars));
    }

    getRaceCar();
  }
}

export default App;
