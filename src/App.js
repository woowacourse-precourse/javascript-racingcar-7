import { Console, Random } from '@woowacourse/mission-utils';

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

    const playerNames = parsePlayerNames(userInput);
    validatePlayerNames(playerNames);

    const playerScores = createScoreBoard(playerNames);
    const moveCount = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    playRounds(playerScores, moveCount);

    Console.print(`최종 우승자 : ${findWinners(playerScores)}`);
  } catch (error) {
    Console.print(error.message);
    throw error;
  }
}

function parsePlayerNames(userInput) {
  return userInput.split(',').map((e) => e.trim());
}

function validatePlayerNames(playerNames) {
  // [ERROR] 5자를 초과
  // TODO: 특수문자
  const regex = /^[a-zA-Z0-9ㄱ-ㅣ가-힣]{1,5}$/;
  if (playerNames.some((player) => !player.match(regex)))
    throw new Error('[ERROR]');
}

function createScoreBoard(playerNames) {
  return playerNames.map((name) => ({ name, score: 0 }));
}

function playRounds(scoreBoard, moveCount) {
  for (let i = 0; i < moveCount; i++) {
    scoreBoard.forEach(playGame);
    Console.print('\n');
  }
}

function playGame(player) {
  if (Random.pickNumberInRange(0, 9) >= 4) {
    player.score += 1;
  }
  // TODO: 문자열 상수화
  Console.print(`${player.name} : ${'-'.repeat(player.score)}`);
}

function findWinners(playerScores) {
  const { score: maxScore } = playerScores.reduce(findMaxScorePlayer);

  return playerScores
    .filter((player) => player.score === maxScore)
    .map((player) => player.name)
    .join(', ');
}

function findMaxScorePlayer(prev, current) {
  if (prev.score > current.score) {
    return prev;
  } else {
    return current;
  }
}
