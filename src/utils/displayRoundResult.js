import { OutputView } from "../view/OutputView.js";

export function displayRoundResult(cars) {
  const outputView = new OutputView();
  const result = cars.map(
    (car) => `${car.getName()} : ${"-".repeat(car.getCount())}`
  );
  outputView.printMoveCounts(result);
}
