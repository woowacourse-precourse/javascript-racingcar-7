import { GAME_NUMBERS, GAME_MESSAGES } from "./lib/constants.js";
import { Car } from "./Car";
import { handleNameErrors, handleNumberErrors } from "./lib/validations.js";

export class GameManager {
  #cars = [];
  #rounds = 0;
  #random;

  constructor(io, random) {
    this.io = io;
    this.#random = random;
  }

  async play() {
    await this.initializeGame();
    this.runRounds();
    this.announceWinner();
  }

  // ========================= 경기 초기화 =========================
  async initializeGame() {
    const names = await this.getValidCarNames();
    this.#cars = names.map((name) => new Car(name));
    this.#rounds = await this.getValidRounds();
  }

  async getValidCarNames() {
    const input = await this.io.read(GAME_MESSAGES.INPUT_NAMES);
    const names = input.split(",").map((name) => name.trim());

    handleNameErrors(names);
    this.io.print(names.join(","));

    return names;
  }

  async getValidRounds() {
    const input = await this.io.read(GAME_MESSAGES.INPUT_ROUNDS);
    const rounds = Number(input);

    handleNumberErrors(rounds);
    this.io.print(rounds);

    return rounds;
  }
  // =================================================================

  //============================ 경기 진행 ============================
  runRounds() {
    for (let i = 0; i < this.#rounds; i++) {
      this.runSingleRound();
      this.printCarStatus(this.#cars);
    }
  }

  printCarStatus(cars) {
    cars.forEach((car) => {
      this.io.print(car.getStatus());
    });
  }

  runSingleRound() {
    this.#cars.forEach((car) => {
      const shouldMove =
        this.#random(GAME_NUMBERS.MIN_RANDOM, GAME_NUMBERS.MAX_RANDOM) >=
        GAME_NUMBERS.MOVE_THRESHOLD;

      car.move(shouldMove);
    });
  }
  // =================================================================

  // ========================== 우승자 발표 ==========================
  announceWinner() {
    const maxDistance = Math.max(...this.#cars.map((car) => car.getDistance()));
    const winners = this.#cars
      .filter((car) => car.getDistance() === maxDistance)
      .map((car) => car.getName())
      .join(", ");

    this.io.print(GAME_MESSAGES.WINNERS + winners);
  }

  // =================================================================
}
