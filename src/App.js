import { Console, Random } from '@woowacourse/mission-utils';

// 사용자 입력 메시지
const INPUT_PLAYER_NAMES =
  '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분\n)';
const INPUT_MOVE_COUNT = '시도할 횟수는 몇 회인가요?';

// 게임 결과 메시지
const WINNER_MESSAGE = '최종 우승자 : ';
const ERROR_MESSAGE = '[ERROR]';

// 게임 기능사항 상수
const MIN_PLAYER_NAME_LENGTH = 1;
const MAX_PLAYER_NAME_LENGTH = 5;
const PLAYER_NAME_REGEX = new RegExp(
  `^[a-zA-Z0-9ㄱ-ㅣ가-힣\\s-_!:]{${MIN_PLAYER_NAME_LENGTH},${MAX_PLAYER_NAME_LENGTH}}$`
);
const MIN_SUCCESS_SCORE = 4;
const SCORE_SYMBOL = '-';

class App {
  async run() {
    await main();
  }
}

export default App;

async function main() {
  try {
    const userInput = await Console.readLineAsync(INPUT_PLAYER_NAMES);

    const playerNames = parsePlayerNames(userInput);
    validatePlayerNames(playerNames);

    const playerScores = createScoreBoard(playerNames);
    const moveCount = await Console.readLineAsync(INPUT_MOVE_COUNT);
    playRounds(playerScores, moveCount);

    Console.print(`${WINNER_MESSAGE}${findWinners(playerScores)}`);
  } catch (error) {
    Console.print(error.message);
    throw error;
  }
}

function parsePlayerNames(userInput) {
  return userInput.split(',').map((e) => e.trim());
}

function validatePlayerNames(playerNames) {
  if (playerNames.some((name) => !PLAYER_NAME_REGEX.test(name)))
    throw new Error(ERROR_MESSAGE);
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
  if (Random.pickNumberInRange(0, 9) >= MIN_SUCCESS_SCORE) {
    player.score += 1;
  }

  Console.print(`${player.name} : ${SCORE_SYMBOL.repeat(player.score)}`);
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
