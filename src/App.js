import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const inputCar = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    const carArr = inputCar.split(',');
    const n = parseInt(
      await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n'),
    );
    let lenMovedArr = new Array(n).fill(0);

    let resultCar = '';
    Console.print('\n실행 결과');
    for (let i = 0; i < n; i++) {
      carArr.forEach((car, idx) => {
        let lenMoved = '';
        Console.print(`${car} : ${lenMoved}`);
      });
      Console.print(' ');
    }

    Console.print(`최종 우승자 : ${resultCar}`);
  }
}

export default App;
