import RandomNumberGenerateService from '../../src/Service/RandomNumberGenerateService';
import { mockRandoms } from '../ApplicationTest';

describe('RandomNumberGenerateService', () => {
  test('0에서 9사이의 무작위 값을 생성한다', () => {
    const mockValues = [8];

    mockRandoms(mockValues);

    const randomNumberGenerateService = new RandomNumberGenerateService();
    const randomValue = randomNumberGenerateService.generate();

    expect(randomValue).toBeGreaterThanOrEqual(0);
    expect(randomValue).toBeLessThanOrEqual(9);
  });
});
