import { Console } from "@woowacourse/mission-utils";

const WinnerCarPrint = (winner_car) => {
  Console.print("최종 우승자 : " + winner_car);
};

// 가장 많이 전진한 자동차 찾기
export const maxScoreCar = (car_names_arr, car_racing_result) => {
  const max_score = Math.max(...car_racing_result);
  const winner_car = car_names_arr.filter(
    (_, player) => car_racing_result[player] === max_score
  );
  WinnerCarPrint(winner_car.join(", "));
};
