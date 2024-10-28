import { MissionUtils } from '@woowacourse/mission-utils';
import CarModel from '../src/model/CarModel';
import GameModel from '../src/model/GameModel';

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

describe('GameModel 테스트', () => {
	let gameModel;
	let cars;

	beforeEach(() => {
		// 테스트용 자동차 생성
		cars = [new CarModel('JH'), new CarModel('pobi'), new CarModel('woni')];
		gameModel = new GameModel(cars, 5);
	});

	test('runRound 실행 시 자동차들이 올바르게 이동하는지 테스트', () => {
		// given
		MissionUtils.Random.pickNumberInRange = jest
			.fn()
			.mockReturnValueOnce(4)
			.mockReturnValueOnce(3)
			.mockReturnValueOnce(5);

		// when
		gameModel.runRound();

		// then
		expect(cars[0].getCurrentPosition()).toBe(1);
		expect(cars[1].getCurrentPosition()).toBe(0);
		expect(cars[2].getCurrentPosition()).toBe(1);
	});

	test('getMaxPosition이 가장 앞선 위치를 반환하는지 테스트', () => {
		// given
		MissionUtils.Random.pickNumberInRange = jest
			.fn()
			.mockReturnValueOnce(4)
			.mockReturnValueOnce(4)
			.mockReturnValueOnce(4);
		gameModel.runRound();

		MissionUtils.Random.pickNumberInRange = jest
			.fn()
			.mockReturnValueOnce(4)
			.mockReturnValueOnce(3)
			.mockReturnValueOnce(3);
		gameModel.runRound();

		// when
		const maxPosition = gameModel.getMaxPosition();

		// then
		expect(maxPosition).toBe(2);
	});

	test('getCarsAtPosition이 특정 위치의 자동차들을 반환하는지 테스트', () => {
		// given
		MissionUtils.Random.pickNumberInRange = jest
			.fn()
			.mockReturnValueOnce(4)
			.mockReturnValueOnce(4)
			.mockReturnValueOnce(3);
		gameModel.runRound();

		// when
		const carsAtPositionOne = gameModel.getCarsAtPosition(1);
		const carsAtPositionZero = gameModel.getCarsAtPosition(0);

		// then
		expect(carsAtPositionOne).toHaveLength(2);
		expect(carsAtPositionZero).toHaveLength(1);
		expect(carsAtPositionOne.map((car) => car.getName())).toContain('JH');
		expect(carsAtPositionOne.map((car) => car.getName())).toContain('pobi');
		expect(carsAtPositionZero.map((car) => car.getName())).toContain('woni');
	});

	test('getWinnersName이 우승자들의 이름을 반환하는지 테스트', () => {
		// given
		MissionUtils.Random.pickNumberInRange = jest
			.fn()
			.mockReturnValueOnce(4)
			.mockReturnValueOnce(4)
			.mockReturnValueOnce(3);
		gameModel.runRound();

		// when
		const winners = gameModel.getWinnersName();

		// then
		expect(winners).toHaveLength(2);
		expect(winners).toContain('JH');
		expect(winners).toContain('pobi');
		expect(winners).not.toContain('woni');
	});

	test('동일한 위치에 여러 우승자가 있을 경우 모두 반환하는지 테스트', () => {
		// given
		MissionUtils.Random.pickNumberInRange = jest
			.fn()
			.mockReturnValueOnce(4)
			.mockReturnValueOnce(4)
			.mockReturnValueOnce(4);
		gameModel.runRound();

		// when
		const winners = gameModel.getWinnersName();

		// then
		expect(winners).toHaveLength(3);
		expect(winners).toContain('JH');
		expect(winners).toContain('pobi');
		expect(winners).toContain('woni');
	});
});
