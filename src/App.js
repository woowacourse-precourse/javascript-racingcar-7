import { Console } from "@woowacourse/mission-utils";
import CarRacing from "./racingCar/CarRacing.js";

class App {
  async run() {
    try {
      const carRacing = new CarRacing();
      await carRacing.run();
    } catch (error) {
      Console.print(error.message);
      throw error;
    };
  };
};

export default App;
