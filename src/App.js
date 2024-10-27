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

async function getNumber() {
  const input = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요? \n");
  const blank = /(\s*)/g;
  const integerInput = Number(input.replace(blank,''));
  return integerInput;
}

async function getCarname() {
  const input = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) \n");
  const blank = /(\s*)/g;
  const splitInput = input.replace(blank,'').split(',');
  return splitInput;
}

class App {
  async run() {
    const carnames = await getCarname();
    const number = await getNumber();
    const carProgress = printProgress(carnames, number);
    printWinner(carnames, carProgress);
  }
}

export default App;
