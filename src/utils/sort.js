export const sortScore = (cars) => {
  return cars.sort((n, m) => m.getPoints() - n.getPoints());
}