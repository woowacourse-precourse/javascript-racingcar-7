import { Console, Random } from "@woowacourse/mission-utils";

const racingResultPrint = () => {
  Console.print("\n실행 결과");
};

const indentPrint = () => {
  Console.print("");
};

// 중간 결과 출력
const midResultScorePrint = (cur_car_player, cur_car_score) => {
  const cur_car_score_board = "-".repeat(cur_car_score);
  Console.print(cur_car_player + " : " + cur_car_score_board);
};

// 랜덤 번호에 따라서 자동차 전진 또는 멈춤
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
  racingResultPrint();
  Array.from({ length: attempt_number }).forEach(() => {
    carScoreGain(car_names_arr, car_score_arr);
    indentPrint();
  });

  return car_score_arr;
};
