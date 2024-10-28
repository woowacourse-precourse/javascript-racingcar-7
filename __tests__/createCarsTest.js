import Car from '../src/models/Car';
import { createCars } from '../src/utils/createCars.js';

test('이름들이 자동차 배열로 반환되는지 확인', () => {
  const cars = createCars(['pobi', 'woni', 'jun']);

  expect(cars).toHaveLength(3);
  expect(cars[0]).toBeInstanceOf(Car);
  expect(cars[0].getName()).toBe('pobi');
});
