import { raceController } from '../Controller.js';

describe('raceController Test', () => {
  let controller;

  beforeEach(() => {
    controller = new raceController('pobi, jun, woni', 5);
  });

  test('inputNames 입력값이 cars 배열로 제대로 생성된다.', () => {
    expect(controller.cars.length).toBe(3);
    expect(controller.cars[0].getName()).toBe('pobi');
    expect(controller.cars[1].getName()).toBe('jun');
    expect(controller.cars[2].getName()).toBe('woni');
  });

  test('inputAttemps 입력값이 올바르게 생성된다.', () => {
    expect(controller.attemps).toBe(5);
  });

  test('maxPosition 값이 올바르게 반환되는 지 확인한다.', () => {
    controller.cars[0].position = 2;
    controller.cars[1].position = 3;
    controller.cars[2].position = 4;
    expect(controller.getMaxPosition()).toBe(4);
  });

  test('maxPosition의 값을 가진 자동차 이름이 올바르게 출력되는 지 확인한다', () => {
    controller.cars[0].position = 2;
    controller.cars[1].position = 4;
    controller.cars[2].position = 4;
    const maxPosition = controller.getMaxPosition();
    expect(controller.getWinners(maxPosition)).toEqual(['jun', 'woni']);
  });
});
