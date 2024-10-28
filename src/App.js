import Console from '@woowacourse/mission-utils/Console';
import RacingGame from './RacingGame.js';

class App {
    async run() {
        try {
            const carNames = await this.getCarNames();
            const rounds = await this.getRounds();
            const game = new RacingGame(carNames, rounds);
            await game.play();
        } catch (error) {
            Console.print(`[ERROR] ${error.message}`);
        }
    }

    getCarNames() {
        return new Promise((resolve, reject) => {
            Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n', input => {
                const names = input.split(',').map(name => name.trim());
                if (names.some(name => name.length > 5)) {
                    return reject(new Error('자동차 이름은 5자 이하만 가능합니다.'));
                }
                resolve(names);
            });
        });
    }

    getRounds() {
        return new Promise((resolve, reject) => {
            Console.readLineAsync('시도할 횟수는 몇 회인가요?\n', input => {
                const rounds = parseInt(input, 10);
                if (isNaN(rounds) || rounds <= 0) {
                    return reject(new Error('시도 횟수는 1 이상의 숫자여야 합니다.'));
                }
                resolve(rounds);
            });
        });
    }
}

export default App;
