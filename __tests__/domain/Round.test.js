import Round from '../../src/domain/Round.js';

describe('Round 테스트', () => {
  test('유효한 라운드 생성 확인', () => {
    // given & when
    const round = new Round(3);

    // then
    expect(round.getTargetRound()).toBe(3);
  });

  test('유효하지 않은 라운드로 생성시 예외 발생 확인', () => {
    // given
    const invalidRounds = [-1, 0, 1.5];

    // when & then
    invalidRounds.forEach((invalidRound) => {
      expect(() => new Round(invalidRound)).toThrow('[ERROR]');
    });
  });

  test('라운드 정상 진행 여부 확인', () => {
    // given
    const round = new Round(2);

    // when & then
    expect(round.isFinished()).toBeFalsy();

    round.nextRound();
    expect(round.isFinished()).toBeFalsy();

    round.nextRound();
    expect(round.isFinished()).toBeTruthy();
  });
});
