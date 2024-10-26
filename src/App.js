import { Console } from "@woowacourse/mission-utils"
import { ERROR_MESSAGES } from "./ErrorMessages.js";
import updateCarDistances from "./CarMovement.js";
import distanceResult from "./DistanceResult.js";
import FindWinnerCar from "./FindWinner.js";

class App {
  async run() {
    const inputCar = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"); // 자동차 이름 입력받음
    if (inputCar.length === 0) { // 빈 문자열이 입력되었을 때
      throw new Error(ERROR_MESSAGES.empty_car_list);
    }

    const cars = inputCar.split(",").filter(item => item !== "");
    if (cars.length === 1) { // 자동차가 하나만 입력되었을 때
      throw new Error(ERROR_MESSAGES.only_one_car)
    }

    const uniqueCars = new Set(cars);
    if (uniqueCars.size !== cars.length) { // 중복되는 자동차가 존재할 때
      throw new Error(ERROR_MESSAGES.duplicate_car);
    }

    cars.forEach((car) => {
      if (car.length > 5) { // 5자리보다 긴 자동차 이름이 존재할 때
        throw new Error(ERROR_MESSAGES.long_name_car);
      }
    })

    const inputNum = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    const count = parseInt(inputNum);
    if (isNaN(count)) { // 횟수가 숫자가 아닐 때
      throw new Error(ERROR_MESSAGES.not_number)
    }

    if (count < 0) { // 횟수가 음수일 때
      throw new Error(ERROR_MESSAGES.not_positive_number)
    }

    const distances = Array(cars.length).fill(0); // 각 자동차 거리 저장할 배열

    for (let i = 0; i < count; i++) {
      updateCarDistances(distances); // 각 자동차 전진
      Console.print(distanceResult(cars, distances)); // 자동차 거리 현황 출력
    }

    const winnerCar = FindWinnerCar(distances, cars); // 우승자 찾기

    Console.print(`최종 우승자 : ${winnerCar.join(', ')}`) // 최종 우승자 ,로 구분하여 출력
  }
}

export default App;
