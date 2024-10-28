import { GameWinnerMessage } from "../view/ConsoleView.js";

const gameResultController = (carList) => {
  const getWinner = () => {
    const isArrayAdvance = carList.cars.map((car) => car.advance);
    const isMaxAdvance = Math.max(...isArrayAdvance);
    const isWinnerCar = carList.cars.filter(
      (car) => car.advance === isMaxAdvance
    );

    // 우승자 이름 배열을 생성하고 출력
    const isWinnerName = isWinnerCar.map((car) => car.name).join(", ");
    GameWinnerMessage(isWinnerName);
  };

  getWinner();
};

export default gameResultController;
