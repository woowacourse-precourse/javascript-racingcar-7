import { MissionUtils } from "@woowacourse/mission-utils";

class CarNameParser {
  constructor(names) {
    this.names = this.splitCarName(names);
    names.forEach(car => {
      this.CheckCarName(car);
    });
  }

  CheckCarName(name) {
    if (name.length > 5) {
      throw new Error("[ERROR]이름은 5자를 초과할 수 없습니다.");
    }
  }
  splitCarName(input) {
    const DELIMITER = ',';
    return input.split(DELIMITER).map(part => part.trim());
  }

}

class TimeStringToNumber {
  constructor(times) {
    this.isPositiveIntegar(times);
    return Number(times);
  }
  isPositiveIntegar(times) {
    const POSITIVE_INTEGER_REGEX = /^\d+$/;
    if (POSITIVE_INTEGER_REGEX.test(times) == false) {
      throw new Error("[ERROR]횟수는 양의 정수이어야 합니다.");
    }
  }
}

class CarRace {
  Foward(fowardarray){
    let carforward=MissionUtils.Random.pickNumberInRange(0, 9);
    if(carforward>=4){
      fowardarray[j]+=1;
    }
  }
  PrintResult(players){
    MissionUtils.Console.print('${players[j]} : ');

  }
}

class App {
  async run() {
    const cars = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,)기준으로 구분)\n");
    const players = new CarNameParser(cars);
    const times = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    const time = TimeStringToNumber(times);
    let countArray=new Array(players.length);
    for(i=0; i<time; i++){
      for(j=0; j<players.length; j++){
        let forward=MissionUtils.Random.pickNumberInRange(0, 9);
        if(forward>=4){
          countArray[j]+=1;
        }
        MissionUtils.Console.print('${players[j]} : ');
        for(k=0; k<countArray[j];k++){
          MissionUtils.Console.print('-');
        }
        MissionUtils.Console.print("\n");
      }
      MissionUtils.Console.print("\n");
    }
    




  }


export default App;