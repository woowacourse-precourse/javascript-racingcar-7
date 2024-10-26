import { MissionUtils } from "@woowacourse/mission-utils";

function saveRandom(carnames, number){
  for(let i = 0; i < number; i++){
    carnames.map((car) => {
      const randomValue = MissionUtils.Random.pickNumberInRange(0, 9);
    })
  }
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
    saveRandom(carnames, number);
  }
}

export default App;
