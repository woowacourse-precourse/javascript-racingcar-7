import { Racing } from "../models/Racing";
import { Input } from "../views/Input";

export class RaceController {
	run() {
		try {
			const carNames = Input.getCarNames();
			const rounds = Input.getMoveCount();

			const race = new Racing(carNames, rounds);

			for (let i = 0; i < rounds; i++) {
				race.playRound();
				// 라운드마다 자동차 위치 출력하는 부분 추가해야 함
			}

			const winners = race.getWinners();
			// 최종 우승자 출력하는 부분 추가해야 함
		} catch (error) {
			throw new Error("[ERROR] 자동차 경주 실행에 오류가 발생했습니다.");
		}
	}
}
