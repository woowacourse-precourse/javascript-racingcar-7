export const OUTPUT_MESSAGE = Object.freeze({
  raceResult: '실행 결과',
  lapDistance: (name, distance) => `${name} : ${distance}`,
  winners: (winners) => `최종 우승자 : ${winners.join(', ')}`,
});
