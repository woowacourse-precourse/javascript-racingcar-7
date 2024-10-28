import { MissionUtils } from "@woowacourse/mission-utils";

function printWinner(carnames, carProgress){
  const winValue = Math.max(...carProgress);
  let winners = [];
  carProgress.forEach((element, index) => {
    if(element === winValue)
      winners.push(carnames[index]);
  });
  MissionUtils.Console.print('최종 우승자 : ' + winners.map((win) => win).join(', '));
}

function saveRandom(carCount, randomArray){
  let array = randomArray;

  for(let i = 0; i < carCount; i++){
    let randomValue = MissionUtils.Random.pickNumberInRange(0, 9);
    if(randomValue >= 4) randomValue = 1;
    else randomValue = 0;
    array[i] += randomValue;
  }
  return array;
};

function printProgress(carnames, number){
  const carCount = carnames.length;
  var randomArray = Array.from({length: carCount}, () => 0);
  let carProgress;
  const progress = '-';

  MissionUtils.Console.print('\n실행 결과');

  for(let i = 0; i < number; i++){
    carProgress = saveRandom(carCount, randomArray);
    for(let j = 0; j < carCount; j++){
      MissionUtils.Console.print(carnames[j] + ' : ' + progress.repeat(carProgress[j]));
    }
    MissionUtils.Console.print('\n');
  }
  return carProgress;
}

function numberException(input){
  if(!input) throw new Error("[ERROR] 시도 횟수가 입력되지 않았습니다");
  
  if(Number(input) <= 0) throw new Error("[ERROR] 시도 횟수는 1 이상의 수만 가능합니다.");
}

async function getNumber() {
  const input = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요? \n");

  numberException(input);

  const blank = /(\s*)/g;
  const integerInput = Number(input.replace(blank,''));
  return integerInput;
}

function carNameException(input) {
  if(!input) throw new Error("[ERROR] 자동차 이름이 입력되지 않았습니다");

  if(!input.includes(',')) throw new Error("[ERROR] 자동차 이름 구분을 위한 쉼표(,)를 입력하지 않았습니다.");

  const inputArray = input.split(',');

  const checkDuplication = new Set(inputArray);
  if(inputArray.length !== checkDuplication.size) throw new Error("[ERROR] 자동차 이름이 중복되었습니다.")

  const checkLength = inputArray;
  checkLength.forEach((input) => {
    if(input.length > 5) throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
  })
}

async function getCarname() {
  const input = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) \n");

  carNameException(input);

  const blank = /(\s*)/g;
  const splitInput = input.replace(blank,'').split(',');
  return splitInput;
}

class App {
  async run() {
    try{
      const carnames = await getCarname();
      const number = await getNumber();
      const carProgress = printProgress(carnames, number);
      printWinner(carnames, carProgress);
    } catch (error) {
      MissionUtils.Console.print(error.message || "[ERROR] 프로그램이 종료되었습니다.");
      throw error; 
    }
  }
}

export default App;
