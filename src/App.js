import { parsePlayers, parseRound } from './parseInput';
import { processInputToOutput } from './Simulate';
import { formatOutput } from './formatOutput';

import { MissionUtils } from '@woowacourse/mission-utils'
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;

const Message = {
  playerList : '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  roundNumber : '시도할 횟수는 몇 회인가요?\n'
}


class App {
  async run() {
    const inputList = await Console.readLineAsync(Message.playerList);
    let players = parsePlayers(inputList);
    const inputRound = await Console.readLineAsync(Message.roundNumber);
    let round = parseRound(inputRound);
    const processResult = processInputToOutput(players, round);
    Console.print( formatOutput(processResult) );
  }

}

export default App;
