// Random.pickNumberInRange(0, 9);   : 0에서 9까지의 정수 중 한 개의 정수 반환
import { Random, Console } from "@woowacourse/mission-utils";

function forward(cnt) {
  if (Random.pickNumberInRange(0, 9) >= 4)
    cnt = (cnt || 0) + 1;       // cnt가 false(undefined, null, 0)일 경우 0으로 초기화 후 1을 더함, true일 경우 cnt를 그대로 사용 후 1을 더함
  return cnt;
}

function printResult(cars, cnt) {
  for (let i = 0; i < cars.length; i++) 
    Console.print(cars[i] + " : " + "-".repeat(cnt[i]))
}

function findMax(cars, cnt) {
  // const max = Math.max(...cnt);          cnt 리스트에 undefined 존재시 NaN 반환됨
  let max = 0;
  for (let i = 0; i < cnt.length; i++)
    if (max < cnt[i])
      max = cnt[i];
  return max;
}

function findWinner(cars, cnt) {
  const max = findMax(cars, cnt);
  let winner = [];
  for (let i = 0; i < cars.length; i++)
    if (cnt[i] == max)
      winner.push(" " + cars[i]);
    
  Console.print("최종 우승자 :" + winner);
}

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
      
      let cnt = [];
      while (tryNum) {  // 입력 받은 값만큼 시도
        for (let i = 0; i < cars.length; i++) 
          cnt[i] = forward(cnt[i]);
        
        tryNum--;
      }

      printResult(cars, cnt);
      findWinner(cars, cnt);
    } catch(error) {
      throw new Error(`[ERROR]`);
    }
  }
}

export default App;