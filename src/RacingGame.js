import { MissionUtils } from "@woowacourse/mission-utils";

export class RacingGame {
    constructor() {
        this.cars = {};
        this.tryCount = 0;
    }

    validateNames(names) {
        const nameSet = new Set();
        names.forEach(name => {
            if (name.length > 5) {
                throw new Error("[ERROR] 이름은 5자 이하만 가능합니다.");
            }
            if (nameSet.has(name)) {
                throw new Error("[ERROR] 중복된 이름이 있습니다.");
            }
            nameSet.add(name);
        });
    }
}

export default RacingGame;
