import { Game } from "../Game.js";

test('update 함수 테스트', () => {
    const game = new Game('pobi,woni,jun', 3);
    const movingCars = ['pobi', 'woni'];
    const nextRecord = {
        pobi: 1,
        woni: 1,
        jun: 0,
    }
    game.update(movingCars);
    const result = game.record;
    expect(result).toEqual(nextRecord);
})