import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const CAR_NAMES_INPUT = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)\n'
    );

    if (!CAR_NAMES_INPUT) {
      Console.print('[ERROR] 자동차 이름을 입력해주세요.');
      return;
    }

    const CAR_NAMES = CAR_NAMES_INPUT.split(',');

    CAR_NAMES.forEach((car) => {
      if (car.length > 5 || car.length === 0) {
        Console.print('[ERROR] 자동차 이름은 5자 이하여야 합니다.');
        return;
      }
    });

    const TRY_COUNT = await Console.readLineAsync(
      '시도할 횟수는 몇회인가요?\n'
    );

    Console.print(`실행 결과\n`);
  }
}

export default App;
