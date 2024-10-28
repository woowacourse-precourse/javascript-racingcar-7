import { Console, Random } from '@woowacourse/mission-utils';
import {
  checkDuplicateCarName,
  validateCarName,
  checkValidateCarNumber,
} from './validation/validateCarName.js';
import { validateRaceNumber } from './validation/validateRaceNumber.js';

const determineCarName = (input) => {
  const names = input.split(',');
  checkDuplicateCarName(names);
  checkValidateCarNumber(names);
  names.forEach((name) => validateCarName(name));
};

const goAhead = (names, raceNum) => {
  Console.print('실행 결과');
  const raceRecord = updateRaceStatus(names, raceNum);

  for (let i = 0; i < raceNum; i++) {
    raceRecord.forEach((record) =>
      Console.print(`${record.name} : ${'-'.repeat(record.aheadNum)}`)
    );
    Console.print('');
  }

  const winner = findWinner(raceRecord);
  Console.print(`최종 우승자 : ${winner.join(', ')}`);
};

const updateRaceStatus = (names, raceNum) => {
  const namesArray = names.split(',');
  const raceRecord = namesArray.map((name) => ({ name, aheadNum: 0 }));
  for (let i = 0; i < raceNum; i++) {
    raceRecord.forEach((record) => {
      determineMovement(record);
    });
  }
  return raceRecord;
};

const determineMovement = (record) => {
  if (Random.pickNumberInRange(0, 9) >= 4) {
    return (record.aheadNum += 1);
  }
  return;
};

const findWinner = (raceRecord) => {
  const maxAhead = Math.max(...raceRecord.map((record) => record.aheadNum));
  const winners = raceRecord
    .filter((record) => record.aheadNum === maxAhead)
    .map((record) => record.name);
  return winners;
};

class App {
  async run() {
    const input = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    determineCarName(input);
    const raceNumber =
      await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    validateRaceNumber(raceNumber);
    goAhead(input, raceNumber);
  }
}

export default App;
