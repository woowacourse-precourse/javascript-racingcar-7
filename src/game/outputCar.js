export const makeOutput = (carData) => {
  let output = '';
  carData.forEach((car) => {
    output += `${car.name} : ${'-'.repeat(car.location)}\n`;
  });
  return output;
};

export const formatWinners = (winners) => {
  const winnerString = winners.map((winner) => winner.name).join(', ');
  const output = `최종 우승자 : ${winnerString}`;
  return output;
}; // 우승자 이름들을 공백 , 으로 구분하여 출력
