import * as MissionUtils from '@woowacourse/mission-utils';
import { displayWinner } from "../src/IO.js";
// randomRacing에서 map의 순회 대상은 CarNames(자동차 이름의 배열)
// 화살표 함수 안의 name은 그저 적절한 이름일 뿐
export function randomRacing(carNames, count, displayResults) {
  let results = carNames.map(name => ({ name, position: "", advanceCount: 0 })); 

  for (let i = 1; i <= count; i++) {
    results = updatePositions(results); // 위치 업데이트
    displayResults(results); // 결과 출력
  }
  displayWinner(results);
}

// updatePositions에서 map의 순회 대상은 results(자동차 객체의 배열)
// 각 요소는 자동차의 전체 상태를 나타내므로 car이 적합.
export function updatePositions(results) {
  return results.map(car => {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) { 
      car.position += "-";
      car.advanceCount ++;
    }
    return car;
  });
}
