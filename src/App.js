import { GIDE_MESSAGE } from "./Constants/constant.js";
import inputCarList from "./Components/Input/inputCarList.js";
import inputTryNum from "./Components/Input/inputTryNum.js";

class App {
  async run() {
    try {
      const carList = await inputCarList(GIDE_MESSAGE.carList);
      const tryNumber = await inputTryNum();
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default App;
