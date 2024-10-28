import { Console } from "@woowacourse/mission-utils";

function validateCarsInput(carsInput) {
  if (carsInput.length === 0)
    throw new Error("[ERROR] 자동차를 1개 이상 입력하세요");
  const clearedInput = carsInput.split(",").map((car) => car.trim());
  for (let i = 0; i < clearedInput.length; i++) {
    if (!(clearedInput[i].length > 0 && clearedInput[i].length <= 5)) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다");
    }
  }
}

class App {
  async run() {
    let cars = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    validateCarsInput(cars);
    cars = cars.split(",").map((car) => car.trim());
  }
}

export default App;
