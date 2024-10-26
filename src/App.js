import { Console, Random } from '@woowacourse/mission-utils';

// TODO: ApplicationTest.js 테스트 파일은 현재 skip 상태 풀기
// TODO: 상수 처리

class App {
  async run() {
    try {
      const playerNames = await getUserInputCarName();
      const moveCount = await Console.readLineAsync(
        '시도할 횟수는 몇 회인가요?'
      );
      const playerScore = createCarRacing(playerNames, moveCount);
      Console.print(`최종 우승자 : ${findGameWinner(playerScore)}`);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;

// [ 'pobi', 'woni' ]
export async function getUserInputCarName() {
  const userInput = await Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분\n)'
  );
  const playerNames = userInput.trim().split(',');

  validatePlayerNames(playerNames);
  return formatUserInputForGameResult(playerNames);
}

function validatePlayerNames(playerNames) {
  // [ERROR] 5자를 초과하하거나 쉼표가 아닌 구분자
  const regex = /^[a-zA-Z0-9ㄱ-ㅣ가-힣]{1,5}$/;
  if (!playerNames.every((player) => player.match(regex)))
    throw new Error('[ERROR]');
}

function formatUserInputForGameResult(playerNames) {
  const formattedUserInput = playerNames.map((key) => ({
    name: key,
    score: 0,
  }));

  return formattedUserInput;
}

function createCarRacing(formattedUserInput, moveCount) {
  for (let i = 0; i < moveCount; i++) {
    displayResult(formattedUserInput);
  }

  return displayResult(formattedUserInput);
}

// const playerNames = [
//   { name: 'pobi', score: 0 },
//   { name: 'woni', score: 0 },
// ];
function displayResult(formattedUserInput) {
  // return하여 map으로 변환하기
  formattedUserInput.forEach((player) => {
    if (Random.pickNumberInRange(0, 9) >= 4) player.score += 1;
  });

  formattedUserInput.forEach((player) => {
    Console.print(`${player.name} : ${'-'.repeat(player.score)}`);
  });
  // TODO: 줄바꿈이 여러번 되고 있음
  Console.print('\n');
  return formattedUserInput;
}

function findGameWinner(playerScore) {
  const topScore = playerScore.reduce((prev, current) => {
    if (prev.score > current.score) return prev;
    else return current;
  }).score;

  const topScoringPlayers = playerScore
    .filter((player) => {
      return player.score === topScore;
    })
    .map((player) => player.name);

  return topScoringPlayers.join(', ');
}
//pobi,woni,jun
