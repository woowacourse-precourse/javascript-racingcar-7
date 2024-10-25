import { Console, Random } from '@woowacourse/mission-utils';

// TODO: ApplicationTest.js 테스트 파일은 현재 skip 상태

class App {
  async run() {
    const playerNames = await getUserInputCarName();
    const moveCount = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    createCarRacing(playerNames, moveCount);
  }
}

export default App;

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
  if (!playerNames.some((player) => player.match(regex)))
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
    // TODO: 여기 있으니 줄바꿈이 moveCount만큼 되고 있음
    Console.print('\n');
  }
}

// [ 'pobi', 'woni' ]
function displayResult(formattedUserInput) {
  formattedUserInput.forEach((player) => {
    if (Random.pickNumberInRange(0, 9) > 4) player.score += 1;
    Console.print(`${player.name} : ${printHyphen(player.score)}\n`);
  });
}

// TODO: 누적해서 결과값이 나오도록
function printHyphen(score) {
  return '-'.repeat(score);
}

// function findGameWinner(){}
