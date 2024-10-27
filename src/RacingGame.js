export class RacingGame {
  constructor(CARNAMES, ROUNDS) {
    if (!Number.isInteger(ROUNDS) || ROUNDS <= 0) {
      throw new Error("[ERROR] 이동 횟수는 양의 정수여야 합니다.");
    }
    this.cars = CARNAMES.map((carName) => new Car(carName));
    this.rounds = ROUNDS;
  }
}
