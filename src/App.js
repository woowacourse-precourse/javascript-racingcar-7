import { Console } from '@woowacourse/mission-utils';
import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    Console.print('경주할 자동차 이름을 입력하세요.');
    const input = await Console.readLineAsync('');
    let car = input.split(",").map(e => e.trim());
    Console.print('시도할 횟수는 몇 회인가요?');
    const tryCount = await Console.readLineAsync('');

    let carDistances = new Array(car.length).fill(0);
    
    for (let i = 0; i < tryCount; i++) {
      for (let j = 0; j < car.length; j++) {
        let carCount = MissionUtils.Random.pickNumberInRange(0, 9);
        if(carCount >= 4){
          carDistances[j]++;
        }
        Console.print(`${car[j]} : ${'-'.repeat(carDistances[j])}`);
      }
      Console.print('\n'); 
    }

    let WinnerIndex = Math.max(...carDistances)
    let Winner = car.filter((_, index) => carDistances[index] === WinnerIndex);

    Console.print(`최종 우승자 : ${Winner.join(", ")}`);
  }
}

export default App;