import { Console } from '@woowacourse/mission-utils';
class App {
  async run() {
    Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    const carNameInput = await Console.readLineAsync('');

    //error: 쉼표가 없을 때
    if(!carNameInput.includes(',')){
      throw new Error('[ERROR] 입력 형식에 맞지 않습니다.');
    }
    
    const cars = carNameInput.split(',');

    //error: 5자 초과, 공백일 경우(=쉼표중복)
    for(let car of cars){
      let carName = car.trim();
      if(carName.length > 5 || carName.length < 1){
        throw new Error('[ERROR] 자동차 이름은 1자 이상 5자 이하여야 합니다.');
      }
    }

    Console.print("시도할 횟수는 몇 회 인가요?");
    const games = await Console.readLineAsync('');
    
    //error: 숫자가 아닌 값을 입력
    if(Number.isNaN(Number(games))) {
      throw new Error('[ERROR] 숫자를 입력해주세요.');
    }
  }
}

export default App;
