const MissionUtils = require('@woowacourse/mission-utils');
const { Random, Console } = MissionUtils;

//1. 자동차 클래스
class Car{
  constructor(name){
    this.name = name;
    this.position = 0;
  }
  // 자동차의 이동 메서드 구현
  move(){
    const randomNum = Random.pickNumberInRange(0, 9);
      if (randomNum >= 4) {
        this.position += 1;
      }
  }
  // 현재 위치 메서드 구현
  getPosition(){
    return '-'.repeat(this.position);
  }
}

//2. 레이스 클래스
class Race{
  constructor(carNames, attempts){
    this.cars = carNames.map(name => new Car(name));
    this.attempts = attempts;
  }

  // 경주 시작 메서드
  run(){
    for (let i = 0; i < this.attempts; i++) {
      this.cars.forEach(car => car.move()); // 각 자동차 이동
      this.printPositions();
    }
  
  }
  // 자동차 이름과 위치 출력 메서드
  printPositions(){
    this.cars.forEach(car => {
      Console.print(`${car.name} : ${car.getPosition()}`); // 자동차 이름과 현재 위치 출력
    });
    Console.print('');
  }

class App {


  async run() {}
}


export default App;
