import { Console } from "@woowacourse/mission-utils";
import {
    PLEASE_INPUT_CARS_NAME,
    PLEASE_INPUT_ROUND,
    RACE_RESULT,
    RACE_WINNER,
} from "./constant.js";
import RaceInfo from "./RaceInfo.js";
import Race from "./Race.js";
import Script from "./Script.js";

class App {
    async run() {
        const rawCarNames = await Console.readLineAsync(PLEASE_INPUT_CARS_NAME);
        const rawRound = await Console.readLineAsync(PLEASE_INPUT_ROUND);

        const raceInfo = new RaceInfo(rawCarNames, rawRound);
        const carNames = raceInfo.carNames;
        const round = raceInfo.round;

        const race = new Race(carNames, round);
        const raceResult = race.result();

        const script = new Script(raceResult);
        const raceSummaryScript = script.generateRaceSummary();
        const winnerScript = script.generateRaceWinner();

        await Console.print(RACE_RESULT + raceSummaryScript);
        await Console.print(RACE_WINNER + winnerScript);
    }
}

export default App;
