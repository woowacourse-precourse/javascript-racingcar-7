import { Console } from "@woowacourse/mission-utils";
import getCarList from "./utils/getCarList.js";
import getCount from "./utils/getCount.js";
import setRandom from "./utils/setRandom.js";
import { printFinalWinners, printRacing } from "./utils/printRacing.js";

class App {
  async run() {
    const carList = await getCarList();
    const count = await getCount();

    setRandom(carList, count);
  }
}

export default App;
