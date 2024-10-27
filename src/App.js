import { GIDE_MESSAGE } from "./Constants/constant.js";
import inputCarList from "./Components/Input/inputCarList.js";

class App {
  async run() {
    try {
      const carList = await inputCarList(GIDE_MESSAGE.carList);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default App;
