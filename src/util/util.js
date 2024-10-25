const printCarMovement = (car) =>
  `${car.name} : ${"-".repeat(car.movementCount)}`;

const isCarNameLengthOver = (value) => {
  const carList = value.split(",");
  return carList.some((car) => car.length > 5);
};

const regularExpressionCheck = (value, regex) => regex.test(value);

export { printCarMovement, isCarNameLengthOver, regularExpressionCheck };
