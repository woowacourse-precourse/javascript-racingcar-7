import { Console } from "@woowacourse/mission-utils";
import goStopResult from "./goStopResult.js";

function raceProgression(carList, initialRaceHistory, trialCount) {
  /** TODO: 
   * 1. 매개 변수로 자동차 배열, 레이스 초기 데이터, 시행 횟수를 받는다
   * 2. 레이스 결과를 저장할 레이스 데이터를 선언
   * 3. 
   * 4. 반복문을 활용하여 시행 횟수와 레이서의 수만큼 레이스 결과를 실행한다
   *  - goStopResult의 결과를 변수에 저장
   *  - 해당 결과를 레이스 데이터에 set
   *  - 한 사이클을 돌은 결과를 출력
   * 5. 레이스 결과를 반환
   */

  const RACE_PROGRESS = initialRaceHistory;
  
  for(let count = 0; count < trialCount; count++) {
    let singleRace = '';

    if(count !== 0) {
      singleRace = `\n`;
    }

    carList.forEach((car) => {
      const GO_STOP = goStopResult();
      const PROGRESS_RESULT = `${RACE_PROGRESS.get(car)}${GO_STOP}`;

      RACE_PROGRESS.set(car, PROGRESS_RESULT);
      singleRace = `${singleRace}
      ${car} : ${PROGRESS_RESULT}`;
    });
    Console.print(singleRace);
  };

  return RACE_PROGRESS;
};

export default raceProgression;