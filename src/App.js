import { MissionUtils } from "@woowacourse/mission-utils";
import { RacingGame } from "./RacingGame.js";

class App {
    async run() {
        const game = new RacingGame();
        await game.getInput();  // 입력 비동기 처리
        game.startRace();
    }
};

export default App;