import {Console, Random} from "@woowacourse/mission-utils"

function checkCarName(carNames){
    carNames.map((name)=>{
        if(name.length > 5){
            throw new Error("[ERROR] : 자동차 이름은 5자 이하만 가능합니다.");
        }
    })
    return true;
}

class App {
  async run() {
    Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");

    const carNamesInput = await Console.readLineAsync("");

    const carNames = carNamesInput.split(",");
    checkCarName(carNames);

    Console.print("시도할 횟수는 몇 회인가요?");
    const moveCount = await Console.readLineAsync("");

    Console.print("실행 결과");

    Console.print("최종 우승자 : ");
  }
}

export default App;
