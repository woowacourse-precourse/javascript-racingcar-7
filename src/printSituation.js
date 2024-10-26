import { Console } from '@woowacourse/mission-utils';

export default function printSituation(moveForwardInformation) {
  Object.entries(moveForwardInformation).map(([name, moveNumber]) => {
    const currentMoveSituation = '-'.repeat(moveNumber);
    Console.print(`${name} : ${currentMoveSituation}`);
  });
}
