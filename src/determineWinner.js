import { Console } from "@woowacourse/mission-utils";

export function determineWinner(CARLIST) {
    const MAXDISTANCE = Math.max(...CARLIST.map(car => car.distance));
    const WINNERNAMELIST = CARLIST
        .filter(car => car.distance == MAXDISTANCE)
        .map(car => car.name);
    Console.print(`최종 우승자 : ${WINNERNAMELIST.join(", ")}`);
}