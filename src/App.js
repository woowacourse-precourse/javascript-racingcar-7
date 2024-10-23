import { Console } from '@woowacourse/mission-utils';

// TODO: ApplicationTest.js 테스트 파일은 현재 skip 상태
class App {
  async run() {
    getUserInputCarName();
  }
}

export default App;

export async function getUserInputCarName() {
  const userInput = await Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분\n)'
  );
  const playerNames = userInput.trim().split(',');

  return playerNames;
}
// getUserInputCarName
// TODO: 에러 핸들링
// userinput으로 n대의 자동차 이름 배열 가져오기
// , 기준으로 이름만 가져오고 공백은 빼기
// 공백은 이름으로 표기안되도록 구현

// getUserInputMoveCount
// 이건 굳이 함수로 안 빼고 그냥 변수로 가져오면 될듯

// createCarRaacing -> 얘를 5회 반복
// 변수 돌면서 map으로 getRandomNumber
// true면 displayResult
// 반복문 어딘가에 count를 넣어야할 것 같은데...

// getRandomNumber
// 인자마다 랜덤 API 돌면서 4 이상하고 true / false 담긴 벼앨 반환
// MissionUtils.Random.pickNumberInRange(0, 9);

// displayResult
// getRandomNumber return값을 바탕으로
// map 돌면서 화면 단에 포매팅해서 그려주기
// true면 결과값 반환
// 아마도 카운트 계속 추가?

// 시도횟수까지 반복
