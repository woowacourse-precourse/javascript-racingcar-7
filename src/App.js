// Random.pickNumberInRange(0, 9);   : 0에서 9까지의 정수 중 한 개의 정수 반환
import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      // 경주할 자동차 이름(이름은 쉼표 기준으로 구분)
      const line = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
      const cars = line.split(',');

      // 시도할 횟수
      let tryNum = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

      if (cars.some(car => car.length > 5))
        throw new Error("[ERROR]");

      while (tryNum) {  // 입력 받은 값만큼 시도
        for (let i = 0; i < cars.length; i++) 
        
        tryNum--;
      }
    } catch(error) {
      throw new Error(`[ERROR]`);
    }
  }
}

export default App;