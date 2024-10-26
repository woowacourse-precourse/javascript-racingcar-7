import { Console } from "@woowacourse/mission-utils";
import getResultCountArray from "./parse/getResultCountArray";
import getRaceWinners from "./parse/getRaceWinners";

function getWinner(carList, raceProgress) {
  const RESULT_DEFAULT_TEXT = '최종 우승자 : ';

  const RACE_RESULT_COUNT = getResultCountArray(carList, raceProgress);

  RACE_RESULT_COUNT.sort((carA, carB) => carB[1] - carA[1]);

  const RACE_WINNERS = getRaceWinners(RACE_RESULT_COUNT);

  const WINNER_NAMES = RACE_WINNERS.map((winner) => winner[0]);
  const WINNER_TEXT = WINNER_NAMES.join(', ');

  const RESULT_TEXT = `${RESULT_DEFAULT_TEXT}${WINNER_TEXT}`;

  Console.print(RESULT_TEXT);
};

export default getWinner;