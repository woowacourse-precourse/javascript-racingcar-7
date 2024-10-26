import PrintFunc from "../print/printFunc.js";
import Car from "./Car.js";

export default function startGame(carNames, raceRap) {
  PrintFunc.printParams("실행결과");

  const carClassArr = makeCarClassArr(carNames);

  for (let i = 0; i < raceRap; i++) {
    carClassArr.forEach((carObj) => {
      carObj.moveCar();
      PrintFunc.printParams(`${carObj.carName} : ${carObj.carMoveLength}`);
    });
    PrintFunc.printParams("");
  }

  checkLastWinner()
}

const makeCarClassArr = (names) => names.map((carName) => new Car(carName));
