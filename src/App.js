import {Console, Random} from "@woowacourse/mission-utils"

function checkCarName(carNames){
    carNames.map((name)=>{
        if(name.length > 5){
            throw new Error("[ERROR] : 자동차 이름은 5자 이하만 가능합니다.");
        }
    })
    return true;
}

function moveJudge(carNames, carRacing){
    carNames.map((car, index)=>{
        if(true){
            carRacing[index] += "-";
        }
    })
}

function printCar(carNames, carRacing){
    carNames.map((car, index)=>{
        Console.print(`${car} : ${carRacing[index]}`);
    })
    Console.print("");
}

class App {
  async run() {
    Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");

    const carNamesInput = await Console.readLineAsync("");

    const carNames = carNamesInput.split(",");
    checkCarName(carNames);

    //let carRacing = [""];
    let carRacing = Array.from({length: carNames.length}, () => "");

    Console.print("시도할 횟수는 몇 회인가요?");
    const moveCount = await Console.readLineAsync("");

    Console.print("실행 결과");
    for(let i = 0; i < moveCount; i++){
        moveJudge(carNames, carRacing);
        printCar(carNames, carRacing);
    }

    Console.print("최종 우승자 : ");
  }
}

export default App;
