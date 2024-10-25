import { Console, Random } from "@woowacourse/mission-utils";

class App {
    async run() {
        const inputCarNames = await Console.readLineAsync(
            "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
        );

        const splittedCarNames = inputCarNames.split(",");
        const carCnt = splittedCarNames.length;

        for (let car of splittedCarNames) {
            if (car.length > 5) {
                throw new Error("[ERROR] 자동차 이름은 5자 이하로 입력 가능합니다.");
            }
        }

        const inputTryCnt = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");

        if (isNaN(inputTryCnt)) {
            throw new Error("[ERROR] 시도할 횟수는 숫자로 입력해야합니다.");
        }

        const runCntArr = Array.from({ length: carCnt }, () => Array(+inputTryCnt).fill(0));

        let tryCnt = 0;
        while (tryCnt < Number(inputTryCnt)) {
            // 각 자동차에 대해 0~9 사이의 무작위 값 구하기
            for (let i = 0; i < carCnt; i++) {
                const randomNumber = Random.pickNumberInRange(0, 9);
                if (randomNumber >= 4) {
                    runCntArr[i][tryCnt] = 1;
                }
            }

            tryCnt++;
        }

        for (let i = 0; i < carCnt; i++) {
            for (let j = 1; j < +inputTryCnt; j++) {
                runCntArr[i][j] += runCntArr[i][j - 1];
            }
        }

        const result = [];

        for (let i = 0; i < +inputTryCnt; i++) {
            for (let j = 0; j < carCnt; j++) {
                result.push(`${splittedCarNames[j]} : ${"-".repeat(runCntArr[j][i])}`);
            }
            result.push("");
        }

        Console.print("\n실행 결과");
        Console.print(result.join("\n"));
    }
}

export default App;
