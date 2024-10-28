import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import Racingcar from '../src/components/Racingcar.js';

const [inputArr, tryNum] = [['pobi', 'jun', 'woni', 'moo'], 7];
const racingcar = new Racingcar(inputArr, tryNum);

describe('Racingcar 클래스 내부 메서드 테스트', () => {
  test.each([
    [
      {
        pobi: '---',
        jun: '----',
        woni: '---',
        moo: '--',
      },
      ['jun'],
    ],
    [
      {
        pobi: '-',
        jun: '-----',
        woni: '--',
        moo: '---',
      },
      ['jun'],
    ],
    [
      {
        pobi: '',
        jun: '----',
        woni: '----',
        moo: '--',
      },
      ['jun', 'woni'],
    ],
  ])('최종 우승자 가리는 기능이 잘 작동하는지', (inputs, expected) => {
    expect(racingcar.rank(inputs)).toEqual(expected);
  });
});
