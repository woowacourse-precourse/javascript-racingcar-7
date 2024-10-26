import { Console, Random } from '@woowacourse/mission-utils';

// TODO: ApplicationTest.js 테스트 파일은 현재 skip 상태 풀기
// TODO: 상수 처리

class App {
  async run() {
    await main();
  }
}

export default App;

async function main() {
  try {
    const userInput = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분\n)'
    );

    const playerNames = userInput.split(',').map((e) => e.trim());
    validatePlayerNames(playerNames);
    const scoreBoard = createScoreBoard(playerNames);

    const moveCount = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');

    createCarRacing(scoreBoard, moveCount);
    Console.print(`최종 우승자 : ${findGameWinners(scoreBoard)}`);
  } catch (error) {
    Console.print(error.message);
    throw error;
  }
}

function validatePlayerNames(playerNames) {
  // [ERROR] 5자를 초과
  const regex = /^[a-zA-Z0-9ㄱ-ㅣ가-힣]{1,5}$/;
  if (playerNames.some((player) => !player.match(regex)))
    throw new Error('[ERROR]');
}

function createScoreBoard(playerNames) {
  return playerNames.map((name) => ({ name, score: 0 }));
}

function createCarRacing(formattedUserInput, moveCount) {
  for (let i = 0; i < moveCount; i++) {
    displayResult(formattedUserInput);
  }
}

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

function findGameWinners(playerScore) {
  const { score: topScore } = playerScore.reduce(findTopScoredPlayer);

  return playerScore
    .filter((player) => player.score === topScore)
    .map((player) => player.name)
    .join(', ');
}

function findTopScoredPlayer(prev, current) {
  if (prev.score > current.score) {
    return prev;
  } else {
    return current;
  }
}
