function getRaceWinners(raceResultCountArray) {
  const WINNERS = [];

  raceResultCountArray.forEach((car, index) => {
    const RACE_LENGTH = car[1];

    if(index === 0) {
      WINNERS.push(car);
      return;
    };

    if(WINNERS[0][1] === RACE_LENGTH) {
      WINNERS.push(car);
      return;
    };
  });

  return WINNERS;
};

export default getRaceWinners;