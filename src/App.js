import { Console } from '@woowacourse/mission-utils';
import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const carNames = (
        await Console.readLineAsync(
          '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
        )
      ).split(',');

      const nameLengthCheck = carNames.some((name) => name.length > 5);
      if (nameLengthCheck) {
        throw new Error('[ERROR] 자동차 이름은 5자 이하여야 합니다.');
      }

      const carsInfo = carNames.reduce((acc, name) => {
        acc[name] = 0;
        return acc;
      }, {});

      const attemps = await Console.readLineAsync(
        '시도할 횟수는 몇 회인가요?\n'
      );

      Console.print('\n실행 결과');
      for (let i = 0; i < attemps; i++) {
        Object.entries(carsInfo).forEach(([key, value]) => {
          const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
          if (randomNumber > 3) {
            carsInfo[key] = value + 1;
          }
          Console.print(`${key} : ${carsInfo[key]}`);
        });
        Console.print('');
      }

      const values = Object.values(carsInfo);
      const max = Math.max(...values);
      const winners = Object.keys(carsInfo).filter(
        (name) => carsInfo[name] === max
      );
      Console.print(`최종 우승자 : ${winners.join(', ')}`);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
