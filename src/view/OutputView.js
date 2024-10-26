import { Console } from "@woowacourse/mission-utils";

class OutputView{
  constructor() {
    this.thisFirstprint=true;;
  }
  async degreeOutput(car,arr){
    if(this.thisFirstprint==true){
      Console.print("실행 결과");
      this.thisFirstprint= false;
    }
    for(let i=0;i<car.length;i++){
      Console.print(car[i] + ' : ' + '-'.repeat(arr[i])); 
    }
    Console.print('\n');
  }

  async printOutput(result){
    const resultmessage = "최종 우승자 : " + result.join(', ');
    Console.print(resultmessage);
  }
}

export default OutputView;