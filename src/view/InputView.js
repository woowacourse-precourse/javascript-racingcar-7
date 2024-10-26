import { Console } from "@woowacourse/mission-utils";

class InputView{
  async getInput(){
    const carName= await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분\n");
    const car=carName.split(',');
    await this.getinputexception(car);

    const tryNumber = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    await this.gettryNumberexception(tryNumber);
    Console.print('\n');

    return {car, tryNumber};
  }

  async getinputexception(car){
    for(let i=0;i<car.length;i++){
      if(car[i].length > 5) {
        throw new Error ("[ERROR] 자동차 이름을 5글자 이하로 작성해주세요.");
      }
      if(car ==''){
        throw new Error ("[ERROR] 자동차 이름을 적어주세요.");
      }
    }
  }
  async gettryNumberexception(tryNumber){
    if(tryNumber < 0){
      throw new Error ("[ERROR] 음수는 입력할 수 없습니다.")
    }
    if(tryNumber == ''){
      throw new Error ("[ERROR] 시도 횟수를 입력해주세요.");
    }
  }
}

export default InputView;