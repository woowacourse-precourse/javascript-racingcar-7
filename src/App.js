import { Console, Random } from '@woowacourse/mission-utils';
class App {
  async run() {
    Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    const carNameInput = await Console.readLineAsync('');

    //error: 쉼표가 없을 때
    if(!carNameInput.includes(',')){
      throw new Error('[ERROR] 입력 형식에 맞지 않습니다.');
    }
    
    const carNames = carNameInput.split(',');

    //error: 5자 초과, 공백일 경우(=쉼표중복)
    for(let carName of carNames){
      let carNameTrim = carName.trim();
      if(carNameTrim.length > 5 || carNameTrim.length < 1){
        throw new Error('[ERROR] 자동차 이름은 1자 이상 5자 이하여야 합니다.');
      }
    }

    Console.print("시도할 횟수는 몇 회 인가요?");
    const games = await Console.readLineAsync('');
    
    //error: 숫자가 아닌 값을 입력
    if(Number.isNaN(Number(games))) {
      throw new Error('[ERROR] 숫자를 입력해주세요.');
    }

    //경주
    //{자동차이름: 전진값} 객체 생성
    const cars = carNames.map(name => ({name, moving:0}));

    Console.print('\n실행 결과');
    for(let i=0; i< games; i++){
      for(let car of cars){
        const randomNum = Random.pickNumberInRange(0, 9);
        if (randomNum > 4) {
          car.moving += 1;
        }
        Console.print(`${car.name} : `+'-'.repeat(car.moving));
      }
      Console.print(' ');
    }


  }
}

export default App;
