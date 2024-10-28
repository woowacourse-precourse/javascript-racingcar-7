// App.js
import { Console } from '@woowacourse/mission-utils'; // 라이브러리 import
import { getCarNames, getMoveCount } from './modules/input.js';
import { startRace } from './modules/race.js';

class App {
    async run() {
        const carNames = await getCarNames();
        const moveCount = await getMoveCount();
        
        startRace(carNames, moveCount); // 경주 시작
    }
}

export default App; // App 클래스를 기본 내보내기
