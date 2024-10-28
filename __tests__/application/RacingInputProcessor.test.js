import RacingInputProcessor from '../../src/application/RacingInputProcessor';

describe('RacingInputProcessor 테스트', () => {
  let racingInputProcessor;
  let mockInputPort;

  beforeEach(() => {
    mockInputPort = {
      readCarsName: jest.fn(),
      readTargetRound: jest.fn(),
    };
    racingInputProcessor = new RacingInputProcessor(mockInputPort);
  });

  describe('extractCarsName 메서드 테스트', () => {
    test('정상적인 자동차 이름 입력이 파싱되어 반환되는지 확인', async () => {
      // given
      const rawInput = 'pobi,woni,jun';
      mockInputPort.readCarsName.mockResolvedValue(rawInput);

      // when
      const result = await racingInputProcessor.extractCarsName();

      // then
      expect(result).toEqual(['pobi', 'woni', 'jun']);
      expect(mockInputPort.readCarsName).toHaveBeenCalledTimes(1);
    });

    test('빈 입력시 에러가 발생하는지 확인', async () => {
      // given
      mockInputPort.readCarsName.mockResolvedValue('');

      // when & then
      await expect(racingInputProcessor.extractCarsName())
        .rejects.toThrow('[ERROR]');
    });
  });

  describe('extractTargetRound 메서드 테스트', () => {
    test('정상적인 라운드 숫자가 반환되는지 확인', async () => {
      // given
      const rawInput = '5';
      mockInputPort.readTargetRound.mockResolvedValue(rawInput);

      // when
      const result = await racingInputProcessor.extractTargetRound();

      // then
      expect(result).toBe(5);
      expect(typeof result).toBe('number');
      expect(mockInputPort.readTargetRound).toHaveBeenCalledTimes(1);
    });

    test('빈 입력시 에러가 발생하는지 확인', async () => {
      // given
      mockInputPort.readTargetRound.mockResolvedValue('');

      // when & then
      await expect(racingInputProcessor.extractTargetRound())
        .rejects.toThrow('[ERROR]');
    });
  });
});
