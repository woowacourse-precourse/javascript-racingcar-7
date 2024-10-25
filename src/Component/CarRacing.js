import { Console, Random } from "@woowacourse/mission-utils";

const midResultScorePrint = (cur_car_player, cur_car_score) => {
  const cur_car_score_board = "-".repeat(cur_car_score);
  Console.print(cur_car_player + " : " + cur_car_score_board);
};

const carScoreGain = (car_names_arr, car_score_arr) => {
  car_names_arr.forEach((_, player) => {
    if (Random.pickNumberInRange(0, 9) >= 4) car_score_arr[player] += 1;
    midResultScorePrint(car_names_arr[player], car_score_arr[player]);
  });
};

export const startCarRacing = (
  car_names_arr,
  car_score_arr,
  attempt_number
) => {
  Console.print("\n실행 결과");
  Array.from({ length: attempt_number }).forEach(() => {
    carScoreGain(car_names_arr, car_score_arr);
    Console.print("");
  });

  return car_score_arr;
};
