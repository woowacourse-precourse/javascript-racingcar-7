import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    const Console = MissionUtils.Console;
    const Random = MissionUtils.Random;

    const isMovingFoward = () => {
      const randomNumber = Random.pickNumberInRange(0, 9);
      if (randomNumber >= 4) {
        return true;
      }
      return false;
    };

    try {
      const inputNames = await Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
      );
      const cars = inputNames
        .split(',')
        .filter((name) => name !== '');

      const carsMap = new Map(
        cars.map((name) => [name, ''])
      );

      cars.forEach((name) => {
        if (name.length > 5) {
          throw Error(
            '자동차 이름은 5자 이하만 가능합니다.'
          );
        }
      });

      const numberOfTry = Number(
        await Console.readLineAsync(
          '시도할 횟수는 몇 회인가요?'
        )
      );
      if (!numberOfTry) {
        throw Error('횟수는 숫자로 입력해주세요.');
      }

      let result = '';
      const playOneRace = () => {
        cars.forEach((name) => {
          if (isMovingFoward()) {
            carsMap.set(name, carsMap.get(name) + '-');
          }
        });

        carsMap.forEach((value, key) => {
          result += `${key} : ${value}\n`;
        });
        result += `\n`;
      };

      for (let i = 0; i < numberOfTry; i++) {
        playOneRace();
      }
      Console.print(numberOfTry);
      Console.print('실행 결과');
      Console.print(result);
    } catch (error) {
      throw Error('[ERROR]' + error.message);
    }
  }
}

export default App;
