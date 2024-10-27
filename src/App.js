import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor(){
    this.carNameObj= {};
    this.count = 0;
  }

  async run() {
    // 자동차 이름, 횟수 입력받기
    await this.getCarNameCount();

    Console.print("실행 결과\n");
    for(let i = 0; i < this.count; i++){
      this.updateCarProgressRandomly();
      this.printRaceResult();
    }

    this.printWinner();
  }

  async getCarNameCount(){
    try{
      let input = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
      input = input.split(',').map(car => car.trim());
      // 이름 길이 확인
      this.checkNameLength(input);

      // 배열을 객체로 변환해 저장
      this.carNameObj = input.reduce((obj, key) => {
        obj[key] = 0;
        return obj;
      },{});

      const num = await Console.readLineAsync("\n시도할 횟수는 몇 회인가요?\n");
      this.count = Number(num);
    }catch(error){
      Console.print("ERROR: 입력 오류");
      throw new Error("[ERROR]");
    }
  }

  checkNameLength(input){
    input.forEach(carName => {
      if(carName.length > 5){
        Console.print("ERROR: 자동차 이름이 5자보다 많습니다.")
        throw new Error("[ERROR]");
      }
    });
  }

  updateCarProgressRandomly(){
    Object.keys(this.carNameObj).forEach(key => {
      const random = MissionUtils.Random.pickNumberInRange(0,9);
      if(random >= 4){
        this.carNameObj[key]++;
      }
    });
  }

  printRaceResult(){
    Object.keys(this.carNameObj).forEach(key => {
      let carDistance = "";
      for(let i = 0; i < this.carNameObj[key]; i++){
        carDistance += "-";
      }
      Console.print(key + " : " + carDistance);
    });

    Console.print(" ");
  }

  printWinner(){
    let maxValue = 0;
    const maxKeys = [];

    Object.keys(this.carNameObj).forEach(key => {
      const value = this.carNameObj[key];

      if(value > maxValue){
        maxValue = value;
        maxKeys.length = 0;
        maxKeys.push(key);
      } else if(value === maxValue && value > 0){
        maxKeys.push(key);
      }
    });

    if(maxKeys.length > 0){
      Console.print(`최종 우승자 : ${maxKeys.join(', ')}`);
    } else{
      Console.print("우승자가 없습니다.");
      throw new Error("[ERROR]");
    }
  }
}

export default App;
