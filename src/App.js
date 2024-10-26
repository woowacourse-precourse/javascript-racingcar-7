import { Console } from '@woowacourse/mission-utils';
import { MissionUtils } from '@woowacourse/mission-utils';
import NameValidation from './utils/NameValidation.js';
import NumValidation from './utils/NumValidation.js';
import Car from './utils/Car.js';
import RaceJudge from './utils/RaceJudge.js';

class App {
  async run() {
    const carInput = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) \n',
    );
    const isNameValid = NameValidation.isValid(carInput.trim());
    const countInput =
      await Console.readLineAsync('시도할 횟수는 몇 회인가요? \n');
    const isNumValid = NumValidation.isValidNum(countInput.trim());
    if (isNameValid && isNumValid) {
      const carList = carInput.split(',').map(name => new Car(name));

      Console.print('실행 결과 \n');

      for (let i = 0; i < Number(countInput); i++) {
        carList.forEach(car => {
          const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9); // 랜덤 숫자 생성
          car.move(randomNumber);
          Console.print(car.getPosition());
        });
        Console.print('');
      }
      const judge = new RaceJudge(carList);
      Console.print(`최종 우승자 : ${judge.decideWinners().join('')}`);
    }
  }
}

export default App;
