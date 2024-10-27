import CarModel from '../src/model/CarModel';

describe('CarModel 테스트', () => {
	test('getName() 테스트', () => {
		const name = 'JH';
		const output = 'JH';
		const carModel = new CarModel(name);

		expect(carModel.getName()).toEqual(output);
	});

	test('move() 테스트', () => {
		const MOVING_FORWARD = 4;
		const STOP = 3;
		const name = 'JH';
		const carModel = new CarModel(name);

		carModel.move(MOVING_FORWARD);
		expect(carModel.getCurrentPosition()).toBe(1);

		carModel.move(STOP);
		expect(carModel.getCurrentPosition()).toBe(1);

		carModel.move(MOVING_FORWARD);
		expect(carModel.getCurrentPosition()).toBe(2);
	});

	test('getCurrentPosition() 테스트', () => {
		const name = 'JH';
		const carModel = new CarModel(name);

		expect(carModel.getCurrentPosition()).toBe(0);

		carModel.move(4);
		expect(carModel.getCurrentPosition()).toBe(1);
	});

	test('canMove() 테스트', () => {
		const name = 'JH';
		const carModel = new CarModel(name);

		expect(carModel.canMove(3)).toBe(false);
		expect(carModel.canMove(4)).toBe(true);
		expect(carModel.canMove(5)).toBe(true);
	});
});
