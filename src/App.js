import checkDuplicateCarName from "./checkDuplicateCarName.js";
import createCarObjectList from "./createCarObjectList.js";
import getCarNameList from "./getCarNameList.js";
import getUserInput from "./getUserInput.js";
import startCarRace from "./startCarRace.js";
import validateCarNameString from "./validateCarNameString.js";
import validateRaceCount from "./validateRaceCount.js";

class App {
  async run() {
    const carNameInputString = await getUserInput("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    validateCarNameString(carNameInputString);
    const carNameList = getCarNameList(carNameInputString);
    checkDuplicateCarName(carNameList);
    const carObjectList = createCarObjectList(carNameList);
    const raceCount = await getUserInput("시도할 횟수는 몇 회인가요?\n");
    validateRaceCount(raceCount);
    startCarRace(carObjectList, raceCount);
  }
}

export default App;
