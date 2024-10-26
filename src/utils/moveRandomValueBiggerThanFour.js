export function moveRandomValueBiggerThanFour(car) {
  const randomValue = Math.floor(Math.random() * 10);
  if (randomValue >= 4) {
    car.forwardMove();
  }
}
