import { Random } from "@woowacourse/mission-utils";

class RaceController {

  createPlayersPositions(playerNumber) {
    const positions = Array(playerNumber).fill(0);
    return positions;
  }

  updatePlayersPositions(positions, i) {
    const num = Random.pickNumberInRange(0, 9);
    if (num >= 4) {
      positions[i] += 1;
    }
  }
  movePlayersRandomly(peopleList) {

    const updatedList = [...peopleList];

    for (let i = 0; i < peopleList.length; i++) {
      updatePlayersPositions(updatedList, i);
    }
  }


  getRaceWinnersIndex(positions) {
    let maxValue = Math.max(...positions);
    let winnersIndex = [];

    positions.forEach((value, index) => { value === maxValue && winnersIndex.push(index) })

    return winnersIndex;

  }
}

export default RaceController;
