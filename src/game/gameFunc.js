import PrintFunc from "../print/printFunc.js";
import Car from "./Car.js";

export default function startGame(carNames, raceRap) {
  PrintFunc.printParams("실행결과");
  const carClassArr = makeCarClassArr(carNames);


}

const makeCarClassArr = (names) => names.map((carName) => new Car(carName));