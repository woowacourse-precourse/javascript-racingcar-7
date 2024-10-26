import {Console, Random} from '@woowacourse/mission-utils'

class App {
  async run() {
    let cars = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");//사용자 입력
    cars = cars.split(',');
    let iter = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    let sco =[];
    for(let i = 0;i<cars.length;i++) {
      sco.push(0);
    }
    Console.print("실행결과");
    for(let i = 0;i<iter;i++){
      for(let j=0; j<cars.length;j++){
        if(Random.pickNumberInRange(0,9)>=4){
          sco[j]++;
        }
        Console.print(cars[j] + " : "+"-".repeat(sco[j]));
      }
      Console.print(" ");
    }

    let max = 0;
    let winner = [];
    for(let i =0;i<cars.length;i++){
      if(sco[i]>=max){
        if(sco[i]>max){
          winner.length = 0;
        }
        max = sco[i];
        winner.push(cars[i]);
      }
    }

    Console.print("최종 우승자 : "+winner.join(', '));
  }
}

export default App;
