import { Console } from '@woowacourse/mission-utils';
import Output from '../src/components/Output';
import { OutputView } from '../src/resources/Constants';

describe('Output 클래스 테스트', () => {
  beforeAll(() => {
    Console.print = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('우승 자동차 이름이 한 개일 때 올바른 형식으로 출력한다.', () => {
    const winners = ['woo'];

    Output.printResult(winners);

    expect(Console.print).toHaveBeenCalledWith(
      `${OutputView.WINNER_PRINT_PREFIX}woo`,
    );
  });

  test('우승 자동차 이름이 여러 개일 때 올바른 형식으로 출력한다.', () => {
    const winners = ['woo', 'wa', 'han'];

    Output.printResult(winners);

    expect(Console.print).toHaveBeenCalledWith(
      `${OutputView.WINNER_PRINT_PREFIX}woo${OutputView.WINNER_NAME_SEPARATOR}wa${OutputView.WINNER_NAME_SEPARATOR}han`,
    );
  });
});
