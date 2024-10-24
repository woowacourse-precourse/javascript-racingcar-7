import { Console } from "@woowacourse/mission-utils";
import CarRacing from "./CarRacing.js";

class App {
  async run() {
    const carRacing = await CarRacing.createInstance();

    carRacing.startBroadCast();

    Console.print(`최종 우승자 : ${carRacing.winners}`);
  }
}

export default App;
