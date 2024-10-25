import { Console, Random } from "@woowacourse/mission-utils"

class App {
  async run() {
    const inputCar = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"); // 자동차 이름 입력받음
    const cars = inputCar.split(",");
    cars.forEach((car) => { // 자동차 이름 5자 이하로 제한
      if (car.length > 5) {
        throw new Error(`[ERROR] "${car}"의 길이가 5를 초과합니다.`);
      }
    })
    const inputNum = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    const count = parseInt(inputNum);
    if (isNaN(count) || count < 0) {
      throw new Error(`[ERROR] 시도할 횟수가 올바르지 않습니다. `)
    }

    const distances = Array(cars.length).fill(0); // 각 자동차 거리 저장할 배열
    for (let i = 0; i < count; i++) {
      for (distance of distances) {
        let randInt = Random.pickNumberInRange(0, 9);
        if (randInt >= 4) { // 4 이상인 경우 자동차 전진
          distance++;
        }
      }
      cars.forEach((char, index) => {
        Console.print(`${char} : ${'-'.repeat(distances[index])}`);
      })
      Console.print("\n");
    }
  }
}

export default App;
