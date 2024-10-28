export function CountWinner(names, randomCounts, winCounts) {
  const maxCount = Math.max(...randomCounts);
  names.forEach((name, index) => {
    if (randomCounts[index] === maxCount) {
      winCounts[index]++;
    }
  });
}

export function FinalWinner(names, winCounts) {
  const maxWins = Math.max(...winCounts);
  const finalWinners = names.filter((_, index) => winCounts[index] === maxWins);
  return finalWinners;
}
