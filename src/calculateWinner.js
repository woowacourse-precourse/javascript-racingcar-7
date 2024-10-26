import { Console } from "@woowacourse/mission-utils";

const calculateWinner = (car, carMovements) => {
  const maxMovement = Math.max(...carMovements);
  const maxIndex = car.reduce((acc, _, index) => {
    if (maxMovement === carMovements[index]) {
      acc.push(index);
    }
    return acc;
  }, []);

  const winner = maxIndex.map((index) => car[index]).join(", ");
  Console.print(`최종 우승자 : ${winner}`);
};

export default calculateWinner;
