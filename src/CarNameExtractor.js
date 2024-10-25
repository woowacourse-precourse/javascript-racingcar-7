export default function extractCarName(carNames) {
  const carNamesArray = carNames.split(',');
  carNamesArray.forEach((carName) => {
    const carData = {
      name: carName,
      totalMoveValue: 0,
    };
    this.carDataList.push(carData);
  });
  return this.carDataList;
}
