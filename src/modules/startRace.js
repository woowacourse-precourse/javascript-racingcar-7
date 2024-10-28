import getRandomDigit from "../utils/getRandomDigit";

function moveCarRandomly(car) {
  const randomDigit = getRandomDigit();

  if (randomDigit >= 4) {
    car.move();
  }
}
