import { Console, Random } from "@woowacourse/mission-utils"

class App {
  async run() {
    const inputCar = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"); // 자동차 이름 입력받음
    if (inputCar.length === 0) {
      throw new Error("[ERROR] 입력된 자동차가 없습니다.");
    }
    const cars = inputCar.split(",");
    if (cars.length === 1) {
      throw new Error("[ERROR] 입력된 자동차가 한 개 뿐입니다.")
    }
    const uniqueCars = new Set(cars);
    if (uniqueCars.size !== cars.length) {
      throw new Error("[ERROR] 중복된 자동차 이름이 있습니다.");
    }
    cars.forEach((car) => { // 자동차 이름 5자 이하로 제한
      if (car.length > 5) {
        throw new Error(`[ERROR] "${car}"의 길이가 5를 초과합니다.`);
      }
    })
    const inputNum = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    const count = parseInt(inputNum);
    if (count < 0) {
      throw new Error('[ERROR] 양수를 입력해주세요.')
    }
    if (isNaN(count)) {
      throw new Error(`[ERROR] 숫자가 아닌 값을 입력하면 안됩니다. `)
    }


    const distances = Array(cars.length).fill(0); // 각 자동차 거리 저장할 배열
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < distances.length; j++) {
        let randInt = Random.pickNumberInRange(0, 9);
        if (randInt >= 4) { // 4 이상인 경우 자동차 전진
          distances[j]++;
        }
      }
      let distanceResult = "";
      cars.forEach((char, index) => {
        distanceResult += `${char} : ${'-'.repeat(distances[index])} `; // 차수별 실행 결과
      })
      Console.print(distanceResult);
    }
    const maxDistance = Math.max(...distances); // 가장 긴 거리 찾기
    const winnerCar = distances.reduce((acc, value, index) => {
      if (value === maxDistance) {
        acc.push(cars[index]);
      }
      return acc;
    }, []);
    Console.print(`최종 우승자 : ${winnerCar.join(', ')}`) // 최종 우승자 ,로 구분하여 출력
  }
}

export default App;
