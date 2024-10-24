// 전진 카운트가 가장 높은 자동차들을 문자열(우승자 형식)로 변환하여 리턴
export const getWinner = (advanceCounts, carsInfoEntries) => {
  const maxCount = Math.max(...advanceCounts);
  const winners = carsInfoEntries
    .filter(([_, advanceCount]) => advanceCount === maxCount)
    .map(([carName, _]) => carName);

  return winners.join(", ");
};
