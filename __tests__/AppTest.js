import { MissionUtils } from '@woowacourse/mission-utils';

import App from '../src/App.js';

describe('자동차 경주', () => {
  test('무작위 값이 4 이상이면 참을 반환한다.', () => {
    const app = new App();
    jest.spyOn(MissionUtils.Random, 'pickNumberInRange').mockReturnValue(4);

    expect(app.isHighEnough()).toBe(true);
  });
});
