import { Console, Random } from '@woowacourse/mission-utils';

// TODO: ApplicationTest.js 테스트 파일은 현재 skip 상태 풀기
// TODO: 상수 처리

class App {
  async run() {
    try {
      const userInput = await Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분\n)'
      );

      const playerNames = userInput.split(',').map((e) => e.trim());
      validatePlayerNames(playerNames);
      const formattedUserInput = formatUserInputForGameResult(playerNames);

      const moveCount = await Console.readLineAsync(
        '시도할 횟수는 몇 회인가요?'
      );

      const playerScore = createCarRacing(formattedUserInput, moveCount);
      Console.print(`최종 우승자 : ${findGameWinner(playerScore)}`);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;

function validatePlayerNames(playerNames) {
  // [ERROR] 5자를 초과
  const regex = /^[a-zA-Z0-9ㄱ-ㅣ가-힣]{1,5}$/;
  if (playerNames.some((player) => !player.match(regex)))
    throw new Error('[ERROR]');
}

function formatUserInputForGameResult(playerNames) {
  return playerNames.map((name) => ({ name, score: 0 }));
}

function createCarRacing(formattedUserInput, moveCount) {
  for (let i = 0; i < moveCount; i++) {
    displayResult(formattedUserInput);
  }
}

// const playerNames = [
//   { name: 'pobi', score: 0 },
//   { name: 'woni', score: 0 },
// ];

// TODO: formattedUserInput 이름 변경
function displayResult(formattedUserInput) {
  for (const player of formattedUserInput) {
    if (Random.pickNumberInRange(0, 9) >= 4) {
      player.score += 1;
    }
    // TODO: 문자열 상수화
    Console.print(`${player.name} : ${'-'.repeat(player.score)}`);
  }

  Console.print('\n');
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
