export function decideWinner(nameArray, moveArray, winnerArray) {
  try {
    let maxLength = 0;

    for (let i = 0; i < moveArray.length; i++) {
      if (moveArray[i].length >= maxLength) maxLength = moveArray[i].length;
    }

    for (let i = 0; i < moveArray.length; i++) {
      if (moveArray[i].length == maxLength) winnerArray.push(nameArray[i]);
    }

    return winnerArray;
  } catch (error) {
    throw new Error("[ERROR]");
  }
}
