import { Console, MissionUtils } from '@woowacourse/mission-utils';

async function InputCarName() {
  const inputName = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
  const carName = inputName.split(',');

  carName.forEach(index => {
    if (index.length > 5) throw new Error("[ERROR] 잘못된 입력입니다.");
  })

  if (carName[carName.length - 1] == '')
    throw new Error("[ERROR] 잘못된 입력입니다.");

  return carName;
}

async function InputTime() {
  const inputTimes = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
  const times = Number(inputTimes);  // 숫자가 아닌 무언가가 들어가면 NaN 반환

  if (Number.isNaN(times))
    throw new Error("[ERROR] 잘못된 입력입니다.");

  return inputTimes
}

function Forward_Judgment() {  // 랜덤 돌리고 결과값 boolean 값으로 반환
  const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
  
  if (randomNum >= 4)
    return true;
  else
    return false;
}

function IncreaseCount(decision, count) {  // boolean 값으로 count 증가시킴
  if (decision === true)
    count += 1
  return count
}

function DrawForward(car, count) {  // 중간 출력 형식 맞추기
  Console.print(car + ' : ' + '-'.repeat(count));
  return 0;
}

function WinnerDecision(cntArray) {
  let maxValue = 0;
  maxValue = Math.max.apply(null, cntArray);  // 최대값 구하기

  const result = []
  let i = 0;
  cntArray.forEach(value => {  // 최대값 인덱스 구하기
    if (value === maxValue) result.push(i);
    i++;
  });
  
  return result;
}

function WinnerPrint(carArr, winArr) {  // 우승자 출력
  const result = []
  winArr.forEach(i => {
    result.push(carArr[i]);
  })

  const arrToStr = result.join(', ');
  return arrToStr;
}

class App {
  async run() {

    const carName = await InputCarName();
    const inputTimes = await InputTime();

    const forwardCount = Array.from({ length: carName.length }, () => 0);

    Console.print("\n실행 결과");
    
    for (let i=0; i<inputTimes; i++) {
      for (let j=0; j<carName.length; j++) {
        const forwardDecision = Forward_Judgment();
        forwardCount[j] = IncreaseCount(forwardDecision, forwardCount[j]);
        const drawing = DrawForward(carName[j], forwardCount[j]);
      }
      Console.print('');
    }

    const winner = WinnerDecision(forwardCount);

    const winCar = WinnerPrint(carName, winner);
    
    Console.print('최종 우승자 : ' + winCar);
  }
}

export default App;
