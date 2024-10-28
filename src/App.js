import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    try{
      const cars = await this.readCarName();
      const attemp = await this.readAttemps();
      const raceResult = await this.startRace(cars, attemp);
      this.printRaceResult(raceResult);
    }catch{

    }
  }

  async readCarName(){
    const input = await Console.readLineAsync("경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분하겠습니다.)\n");
    const cars = input.split(",").map((name) => name.trim());

    // 입력된 이름이 1자 이상 5자 이하인지 확인
    cars.forEach((name) => {
      if(name.length > 5 || name === ""){
        throw new Error("[ERROR] 자동차 이름은 1자 이상, 5자 이하로 입력해야 합니다.");
      }
    });

    // name이라는 키에 해당 자동차의 이름을, position이라는 키에 초기 위치인 0을 값으로 가진 객체 반환
    return cars.map((name) => ({name, position: 0}));
  }

  async readAttemps(){
    const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    const attemps = parseInt(input, 10);

    // 입력된 시도 횟수 값이 1 이상인지, 숫자인지 확인
    if(isNaN(attemps) || attemps <= 0){
      throw new Error("[ERROR] 시도 횟수는 숫자로 입력해야 하며, 1이상이어야 합니다.");
    }

    return attemps;
  }

  async startRace(cars, attemp){
    for(let i = 0; i < attemps; i++){
      cars.forEach((car) => {
        // 무작위 값이 4 이상인 차만 전진
        if(Random.pickNumberInRange(0,9) >= 4){
          cars.position += 1;
        } 
      });
      this.printCurrentStatus(cars);
    }
  }

  printCurrentStatus(cars){
    cars.forEach((car) => {
      Console.print('${car.name} : ${"-".repeat(car.position)}');
    });
    Console.print(""); // 출력 형식 유지를 위한 공백 추가
  }

  printRaceResult(cars){
    const maxPosition = Math.max(...cars.map((car) => car.position));
    const winners = cars.filter((car) => car.position === maxPosition).map((car) => car.name);
    Console.print('최종 우승자 : ${winners.join(", ")}');
  }
}

export default App;