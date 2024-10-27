import { MissionUtils } from "@woowacourse/mission-utils";

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
    const carCount = carnames.length;
    var randomArray = Array.from({length: carCount}, () => 0);
    saveRandom(carCount, randomArray);
  }
}

export default App;
