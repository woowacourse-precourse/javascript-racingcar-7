import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const cars = await inputCars()
  }
}

class Car {
  constructor(name){
    this.name = name;
    this.distance = "";
  }
  moveForward(){
    this.distance += "-";
  }
}

async function inputCars() {
  let cars =  String(await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n")).split(",");
  return cars;
}

export default App;
