import { Console, Random } from '@woowacourse/mission-utils';
import { MESSAGES, REGEX, GAME_SETTINGS } from './constants';

class App {
  async run() {
    const { playerScores, moveCount } = await initializeGame();
    runGame(playerScores, moveCount);
  }
}

export default App;

async function initializeGame() {
  try {
    const playerNames = await getPlayerNames();
    getVaildatedPlayerNames(playerNames);

    const moveCountInput = await Console.readLineAsync(
      MESSAGES.INPUT_MOVE_COUNT
    );
    validateMoveCount(moveCountInput);
    const moveCount = Number(moveCountInput);

    const playerScores = createScoreBoard(playerNames);
    return { playerScores, moveCount };
  } catch (error) {
    Console.print(error.message);
    throw error;
  }
}

async function getPlayerNames() {
  const userInput = await Console.readLineAsync(MESSAGES.INPUT_PLAYER_NAMES);
  return parsePlayerNames(userInput);
}

function parsePlayerNames(userInput) {
  return userInput.split(GAME_SETTINGS.DELIMITER).map((e) => e.trim());
}

function getVaildatedPlayerNames(playerNames) {
  validatePlayerNames(playerNames);
  return playerNames;
}

// TODO: ERROR_MESSAGE 구체화
function validatePlayerNames(playerNames) {
  if (playerNames.some((name) => !REGEX.PLAYER_NAME_REGEX.test(name)))
    throw new Error(MESSAGES.ERROR_MESSAGE);
}

function validateMoveCount(moveCount) {
  if (!REGEX.POSITIVE_INTEGER_REGEX.test(moveCount)) {
    throw new Error(MESSAGES.ERROR_MESSAGE);
  }
}

function createScoreBoard(playerNames) {
  return playerNames.map((name) => ({ name, score: 0 }));
}

function runGame(playerScores, moveCount) {
  playRounds(playerScores, moveCount);
  Console.print(`${MESSAGES.WINNER_MESSAGE}${findWinners(playerScores)}`);
}

function playRounds(scoreBoard, moveCount) {
  for (let i = 0; i < moveCount; i++) {
    scoreBoard.forEach(playGame);
    Console.print(GAME_SETTINGS.NEW_LINE);
  }
}

export function playGame(player) {
  if (Random.pickNumberInRange(0, 9) >= GAME_SETTINGS.MIN_SUCCESS_SCORE) {
    player.score += 1;
  }

  Console.print(
    `${player.name} : ${GAME_SETTINGS.SCORE_SYMBOL.repeat(player.score)}`
  );
}

function findWinners(playerScores) {
  const { score: maxScore } = playerScores.reduce(findMaxScorePlayer);

  return playerScores
    .filter((player) => player.score === maxScore)
    .map((player) => player.name)
    .join(GAME_SETTINGS.PLAYER_NAME_DELIMITER);
}

function findMaxScorePlayer(prev, current) {
  if (prev.score > current.score) {
    return prev;
  } else {
    return current;
  }
}
