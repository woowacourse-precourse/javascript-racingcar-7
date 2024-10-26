import { Console } from "@woowacourse/mission-utils";
import getResultCountArray from "./parse/getResultCountArray";

function getWinner(carList, raceProgress) {
  /** TODO: 
   * 1. 매개변수로 레이스 결과가 저장된 Map, 자동차 리스트를 받는다
   * 2. 출력할 결과 문구의 변수를 초기화 한다 (최종 우승자: 자동차 이름)
   * 3. 우승자를 저장할 빈 배열을 생성한다
   * 4. 반복문을 사용해서 자동차 리스트를 활용해 레이스 결과를 순회한다
   *  - 레이스 결과 Map을 확인하여 value 값을 확인 후 우승자 배열에 추가한다.
   * 5. 우승자 배열을 ' ,' 을 기준으로 join하여 문자열로 변환한다.
   * 6. 결과 문구와 우승자 문구를 합친다
   * 7. 우승자를 출력한다
   */

  const RESULT_DEFAULT_TEXT = '최종 우승자 : ';
  const WINNERS = [];

  const RACE_RESULT_COUNT = getResultCountArray(carList, raceProgress);

  RACE_RESULT_COUNT.sort((carA, carB) => carB[1] - carA[1]);

  RACE_RESULT_COUNT.forEach((car, index) => {
    const RACE_LENGTH = car[1];

    if(index === 0) {
      WINNERS.push(car);
      return;
    };

    if(WINNERS[0][1] === RACE_LENGTH) {
      WINNERS.push(car);
      return;
    };
  });

  const WINNER_NAMES = WINNERS.map((winner) => winner[0]);

  const WINNER_TEXT = WINNER_NAMES.join(', ');
  const FINAL_TEXT = `${RESULT_DEFAULT_TEXT}${WINNER_TEXT}`;

  Console.print(FINAL_TEXT);
};

export default getWinner;