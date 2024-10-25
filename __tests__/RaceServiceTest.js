describe('RaceService', () => {
  test('0에서 9사이의 무작위 값을 생성한다', async () => {
    const raceService = new RaceService();

    for (let i = 0; i < 50; i++) {
      const randomValue = raceService.generateRandomNumber();
      expect(randomValue).toBeGreaterThanOrEqual(0);
      expect(randomValue).toBeLessThanOrEqual(9);
    }
  });
});
