import { Console } from "@woowacourse/mission-utils";

class InputView{
  async getInput(){
    const carName= await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분\n");
    const car=carName.split(',');
    await this.getinputexception(car);

    const tryNumber = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    Console.print('\n');

    return {car, tryNumber};
  }

  async getinputexception(car){
    for(let i=0;i<car.length;i++){
      if(car[i].length > 6) {
        throw new Error ("[Error] 자동차 이름을 5글자 이하로 작성해주세요.");
      }
    }
  }
}

export default InputView;