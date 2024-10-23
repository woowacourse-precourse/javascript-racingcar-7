import { Console, Random } from '@woowacourse/mission-utils';

// TODO: ApplicationTest.js 테스트 파일은 현재 skip 상태
class App {
  async run() {
    await getUserInputCarName();
    const moveCount = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
  }
}

export default App;

export async function getUserInputCarName() {
  const userInput = await Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분\n)'
  );
  const playerNames = userInput.trim().split(',');

  validatePlayerNames(playerNames);
  return playerNames;
}

function validatePlayerNames(playerNames) {
  // [ERROR] 5자를 초과하하거나 쉼표가 아닌 구분자
  const regex = /^[a-zA-Z0-9ㄱ-ㅣ가-힣]{1,5}$/;
  if (!playerNames.every((player) => player.match(regex)))
    throw new Error('[ERROR]');
}

function createCarRacing(playerNames, moveCount) {
  for (i = 0; i < moveCount; i++) {
    displayResult(playerNames);
  }
}

// createCarRaacing -> 얘를 5회 반복
// 변수 돌면서 map으로 getRandomNumber
// true면 displayResult
// 반복문 어딘가에 count를 넣어야할 것 같은데...

// getRandomNumber
// 인자마다 랜덤 API 돌면서 4 이상하고 true / false 담긴 벼앨 반환
// Random.pickNumberInRange(0, 9);

// displayResult
// getRandomNumber return값을 바탕으로
// map 돌면서 화면 단에 포매팅해서 그려주기
// true면 결과값 반환
// 아마도 카운트 계속 추가?

// 시도횟수까지 반복
