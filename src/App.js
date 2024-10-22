import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const cars = await inputCars();
  }
}

class Car {
  constructor(name) {
    this.name = name;
    this.distance = "";
  }
  moveForward() {
    this.distance += "-";
  }
}

async function inputCars() {
  const cars = String(
    await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    )
  ).split(",");
  validateInput(cars);
  return cars.map((car)=>new Car(car));
}
function validateInput(cars){
  cars = cars.forEach((car) => {
    if (car == "") {
      throw Error(["[ERROR] : 잘못된 입력입니다."]);
    }
    if (car.length > 5) {
      throw Error(["[ERROR] : 자동차 이름은 5자 이하만 가능합니다."]);
    }
  });
}



export default App;
