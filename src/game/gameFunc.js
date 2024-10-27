import PrintFunc from "../print/printFunc.js";
import Car from "./Car.js";

export default function startGame(carNames, raceRap) {
  PrintFunc.printParams("실행결과");
  const carClassArr = makeCarClassArr(carNames);
  startRaceGame(carClassArr, raceRap);
}

const makeCarClassArr = (names) => names.map((carName) => new Car(carName));

const startRaceGame = (carArray, rap) => {
  for (let i = 0; i < rap; i++) {
    carArray.forEach((carObj) => {
      carObj.moveCar();
      PrintFunc.printParams(`${carObj.carName} : ${carObj.carMoveLength}`);
    });
    PrintFunc.printParams("");
  };
}