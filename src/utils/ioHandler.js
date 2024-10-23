import { Console } from '@woowacourse/mission-utils';

async function getGameInput() {
  const players = await Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  );
  const count = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
  return { players, count };
}

function printResult(result) {
  Console.print('최종 우승자 : ' + result.join(', '));
}

export { getGameInput, printResult };
