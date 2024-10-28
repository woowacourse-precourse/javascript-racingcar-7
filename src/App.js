import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const carNames = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
      const namesArray = carNames.split(',');
      namesArray.forEach((element) => {
        if (element.length > 5 || element.length === 0) {
          throw new Error('[ERROR]');
        }
      });
      const inputNumber = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?');
      const movingNumber = Number(inputNumber);
      if (Number.isNaN(movingNumber)) {
        throw new Error('[ERROR]');  
      }

      const giveDash = () => {
        const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
        if (randomNumber >= 4) {
          return '-';
        }
        return '';
      };
      let dashArray = namesArray.slice();
      const oneCycle = () => {
        dashArray = dashArray.map((element) => element + giveDash());
        let onlyDash = [];
        onlyDash = dashArray.map((element, index) => {
          const dashes = element.slice(namesArray[index].length);
          return dashes || '';
        });
        for (let i = 0; i < dashArray.length; i++) {
          MissionUtils.Console.print(`${namesArray[i]} : ${onlyDash[i]}`);
        }

        MissionUtils.Console.print('');
      };

      const winner = [];
      for (let i = 0; i < dashArray.length; i++) {
        if (dashArray[i].length - namesArray[i].length === movingNumber) {
          winner.push(namesArray[i]);
          } else if (winner.length === 0) {
          oneCycle();
          i = -1;
        }
      }

      MissionUtils.Console.print(`최종 우승자 : ${winner.join(', ')}`);
    } catch {
      MissionUtils.Console.print('[ERROR]');
      throw new Error('[ERROR]');
    }
  }
}

export default App;
