import { MissionUtils } from '@woowacourse/mission-utils';

import App from '../src/App.js';

describe('자동차 경주', () => {
  let app;

  beforeEach(() => {
    app = new App();
  });

  test('무작위 값이 4 이상이면 참을 반환한다.', () => {
    jest.spyOn(MissionUtils.Random, 'pickNumberInRange').mockReturnValue(4);

    expect(app.isHighEnough()).toBe(true);
  });

  test('무작위 값이 4 미만이면 거짓을 반환한다.', () => {
    jest.spyOn(MissionUtils.Random, 'pickNumberInRange').mockReturnValue(1);

    expect(app.isHighEnough()).toBe(false);
  });
});
