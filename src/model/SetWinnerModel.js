class SetWinnerModel {
  setWinner(carNames, totalMovement) {
    const winnerScore = Math.max(...totalMovement);
    const winner = totalMovement.filter((value, index) => {
      if (value == winnerScore) {
        return carNames[index];
      }
    });
    return winner;
  }
}

export default SetWinnerModel;
