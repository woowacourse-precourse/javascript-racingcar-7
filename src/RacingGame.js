export class RacingGame {
  constructor(CARNAMES, ROUNDS) {
    this.cars = CARNAMES.map((carName) => new Car(carName));
    this.rounds = ROUNDS;

    if (!Number.isInteger(this.rounds) || this.rounds <= 0) {
      throw new Error("[ERROR] 이동 횟수는 양의 정수여야 합니다.");
    }
  }
}
