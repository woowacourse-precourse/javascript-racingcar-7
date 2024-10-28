import { Console, Random } from '@woowacourse/mission-utils';


class App {
  async run() {
    const LINE = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const CARS = LINE.split(',');
    const ATTEMPT = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

    let arr = new Array(CARS.length); //전진 횟수를 기록할 배열
    for(let i = 0; i < arr.length; i++){
      arr[i] = 0;
    }

    try{
      for(let i=0; i<ATTEMPT; i++){
        this.race(arr);
        this.print(arr, CARS);
      }
      this.winner(arr, CARS);
    } catch(error) {
      console.error(error.message);
    }

  }

  race(arr){
    for(let j=0; j<arr.length; j++){
      let randomNumber = Random.pickNumberInRange(0,9);
      if(randomNumber >= 4){
        arr[j]++;
      }
    }
  }

  print(arr, cars) {
    for (let i = 0; i < arr.length; i++) {
      let result = `${cars[i]} : `;
      result += '-'.repeat(arr[i]); // 전진 횟수만큼 '-'를 추가
      Console.print(result);
    }
  }

  winner(arr,cars){

    let winnerArr = [];
    const MAXCOUNT = Math.max(...arr);

    for(let i = 0; i < arr.length; i++){
      if(arr[i] === MAXCOUNT){
        winnerArr.push(cars[i]);
      }
    }
    Console.print(`최종 우승자 : ${winnerArr.join(', ')}`);
  }
}


const APP = new App();
APP.run();

export default App;
