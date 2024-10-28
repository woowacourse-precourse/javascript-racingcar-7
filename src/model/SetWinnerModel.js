class SetWinnerModel {
  setWinner(carNames, totalMovement) {
    const winnerScore = Math.max(...totalMovement);
    const winnerArray = totalMovement.map((value, index) => {
      if (value == winnerScore) {
        return carNames[index];
      }
    });
    const winner = winnerArray.filter((i) => i != undefined);
    return winner;
  }
}

export default SetWinnerModel;
