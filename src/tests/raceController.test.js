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
});
