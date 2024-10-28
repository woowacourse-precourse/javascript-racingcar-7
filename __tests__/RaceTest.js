import Race from '../src/Race.js';

describe('Race', () => {
  test('쉼표로 구분된 문자열로 자동차들을 생성한다', () => {
    const game = new Race('pobi,woni,jun');
    expect(game.cars).toHaveLength(3);
  });

  test('시도 횟수가 1 미만이면 에러가 발생한다', () => {
    const game = new Race('pobi,woni');
    expect(() => {
      game.validateAttempts(0);
    }).toThrow('[ERROR]');
  });

  test('가장 멀리 간 자동차가 우승자가 된다', () => {
    const game = new Race('pobi,woni');
    game.cars[0].position = 3;
    game.cars[1].position = 2;
    expect(game.getWinners()).toBe('pobi');
  });

  test('동일한 거리를 간 자동차들이 있으면 공동 우승한다', () => {
    const game = new Race('pobi,woni');
    game.cars[0].position = 3;
    game.cars[1].position = 3;
    expect(game.getWinners()).toBe('pobi, woni');
  });
});
