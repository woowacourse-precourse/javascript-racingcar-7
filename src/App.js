import { Console, MissionUtils } from '@woowacourse/mission-utils';

async function InputValue() {
  let input_name = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
  let car_name = input_name.split(',');

  car_name.forEach(index => {
    if (index.length > 5) throw new Error("[ERROR] 잘못된 입력입니다.");
  })

  let input_times = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
  let times = Number(input_times);  // 숫자가 아닌 무언가가 들어가면 NaN 반환

  if (Number.isNaN(times)) throw new Error("[ERROR] 잘못된 입력입니다.");

  

  return [car_name, input_times];
}

function Forward_Judgment() {  // 랜덤 돌리고 결과값 boolean 값으로 반환
  let randNum = MissionUtils.Random.pickNumberInRange(0, 9);
  
  if (randNum >= 4)
    return true;
  else
    return false;
}

function IncreaseCount(decision, cnt) {  // boolean 값으로 cnt 증가시킴
  if (decision === true)
    cnt += 1
  return cnt
}

function DrawForward(car, cnt) {  // 중간 출력 형식 맞추기
  Console.print(car + ' : ' + '-'.repeat(cnt));
  return 0;
}

function WinnerDecision(cnt_array) {
  let max_value = Math.max.apply(null, cnt_array);  // 최대값
  let result = []
  let i = 0;
  cnt_array.forEach(value => {  // 최대값
    if (value === max_value) result.push(i);
    i++;
  });

  return result;
}

function WinnerPrint(carArr, win) {  // 우승자 출력
  let result = []
    win.forEach(i => {
      result.push(carArr[i]);
    })

  const tmp = result.join(', ');
  return tmp;
}

class App {
  async run() {

    let [car_name, input_times] = await InputValue();
    let forward_cnt = Array.from({ length: input_times }, () => 0);

    Console.print("\n실행 결과");
    for (let i=0; i<input_times; i++) {
      for (let j=0; j<car_name.length; j++) {
        let forward_decision = Forward_Judgment();
        forward_cnt[j] = await IncreaseCount(forward_decision, forward_cnt[j]);
        let tmp = DrawForward(car_name[j], forward_cnt[j]);
      }
      Console.print('');
    }

    const winner = WinnerDecision(forward_cnt);

    let win_car = WinnerPrint(car_name, winner);
    
    Console.print('최종 우승자 : ' + win_car);
  }
}

export default App;
