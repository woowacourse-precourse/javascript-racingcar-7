import { Console } from '@woowacourse/mission-utils';
import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    Console.print('경주할 자동차 이름을 입력하세요.');
    const input = await Console.readLineAsync('');
    let car = input.split(",").map(e => e.trim());

    // 에러 5글자 이상이거나 이름에 공백이 있을 경우
    if(car.some(car => car.length > 5)){
      throw new Error("[ERROR] 이름은 5자 이하여야 합니다.")
    }
    // 에러 이름에 공백이 있을 경우 
    if (car.some(name => name === "")) {
      throw new Error("[ERROR] 이름에 공백이 포함될 수 없습니다.");
    }
    // 에러 이름이 ,로 시작하거나 ,로 끝나는 경우
    if (input.startsWith(",") || input.endsWith(",")) {
      throw new Error("[ERROR] 이름이 쉼표로 시작하거나 끝날 수 없습니다.");
    }
    // 에러 이름이 중복될 경우
    const uniqueCar = new Set(car);
    if (uniqueCar.size !== car.length) {
      throw new Error("[ERROR] 중복된 이름이 존재합니다.");
    }

    Console.print('시도할 횟수는 몇 회인가요?');
    const tryCount = await Console.readLineAsync('');
    // 에러 숫자가 아닌 값을 입력했을 경우
    if (isNaN(tryCount) || parseInt(tryCount) != tryCount) {
      throw new Error("[ERROR] 시도 횟수는 숫자여야 합니다.");
    }
    // 에러 0을 입력했을 경우
    if (tryCount <= 0) {
      throw new Error("[ERROR] 시도 횟수는 1 이상의 숫자로 입력해야 합니다.");
    }

    let carDistances = new Array(car.length).fill(0);
    
    Console.print('\n실행 결과');
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