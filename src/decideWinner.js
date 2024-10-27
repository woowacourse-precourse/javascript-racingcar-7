export default function decideWinner(moveForwardInformation) {
  let maxMovingNumber = 0;
  const winnerList = [];
  Object.entries(moveForwardInformation).map(([name, moveNumber]) => {
    if (moveNumber > maxMovingNumber) {
      maxMovingNumber = moveNumber;
    }
  });
  Object.entries(moveForwardInformation).map(([name, moveNumber]) => {
    if (maxMovingNumber === moveNumber) {
      winnerList.push(name);
    }
  });

  return winnerList;
}
