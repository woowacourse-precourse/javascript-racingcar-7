import { Racing } from "../models/Racing";
import { Validate } from "../utils/Validate";
import { Input } from "../views/Input";
import { Output } from "../views/Output";

export class RaceController {
	async run() {
		try {
			const carNames = await Input.getCarNames();
			Validate.validateNames(carNames);

			const rounds = await Input.getRounds();
			Validate.validateRounds(rounds);

			const race = new Racing(carNames, rounds);

			for (let i = 0; i < rounds; i++) {
				race.playRound();
				Output.printRoundOutput(race.cars);
			}

			const winners = race.getWinners();
			Output.printFinalWinners(winners);
		} catch (error) {
			throw error;
		}
	}
}
