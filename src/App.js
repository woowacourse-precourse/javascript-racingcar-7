import { Console, Random } from "@woowacourse/mission-utils";
class App {
  async run() {
    Console.print(
      "경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)"
    );
    const INPUT = await Console.readLineAsync("");

    Console.print("시도할 횟수는 몇 회인가요?");
    const TIMES_INPUT = await Console.readLineAsync("");

    let cars = this.validateCarInput(INPUT);
    let times = this.validTimesInput(TIMES_INPUT);
    this.playCarRacing(cars, times);
  }
  
  validateCarInput(input) {
    const cars = input.split(",");
    if (input.indexOf(",") == -1 || input == "") {
      throw new Error("[ERROR] 잘못된 입력입니다.");
    }
    cars.forEach(this.validateCarNameLength);
    return cars.map((car) => ({ name: car, distance: "" }));
  }

  validateCarNameLength(car) {
    if (car.length > 5) {
      throw new Error("[ERROR] 각 자동차 이름은 5자를 초과할 수 없습니다.");
    }
  }

  validTimesInput(input) {
    let times = Number(input);
    if (isNaN(times) || times <= 0 || !Number.isInteger(times)) {
      throw new Error("[ERROR] 시도 횟수는 양의 정수여야 합니다.");
    }
    return times;
  }

  playCarRacing(cars, times) {
    while(times > 0){
      this.movingForward(cars)
      times --
    }      
  }
  movingForward(cars){
    for (let i = 0; i < cars.length; i++){
      let randomNumber = Random.pickNumberInRange(0,9)
      if(randomNumber >=4){
        cars[i].distance +="-"
      }
    }
    this.printProgress(cars)
    Console.print('')
  }

  printProgress(cars){
    cars.forEach((car)=>{
      Console.print(`${car.name} : ${car.distance} `)
    })
  }
}

export default App;
