import {Console, Random} from "@woowacourse/mission-utils"

function checkCarName(carNames) {
    carNames.map((name) => {
        if (name.length > 5) {
            throw new Error("[ERROR] : 자동차 이름은 5자 이하만 가능합니다.");
        }
    })
    return true;
}

function isNumeric(data) {
    return !isNaN(Number(data));
}

function moveJudge(carNames, carRacing) {
    carNames.map((car, index) => {
        const judge = Random.pickNumberInRange(0, 9);
        if (judge >= 4) {
            carRacing[index] += "-";
        }
    })
}

function carPrize(carNames, carRacing) {
    let maxMove = 0;
    let winnerList = "";

    carRacing.map((race) => {
        const movement = race.length;
        if (movement >= maxMove) {
            maxMove = movement;
        }
    });

    carNames.map((car, index) => {
        const movement = carRacing[index].length;
        if (movement === maxMove) {
            winnerList += carNames[index] + ", ";
        }
    });
    const winner = winnerList.slice(0, winnerList.length - 2);
    Console.print(`최종 우승자 : ${winner}`);
}

function printCar(carNames, carRacing) {
    carNames.map((car, index) => {
        Console.print(`${car} : ${carRacing[index]}`);
    })
    Console.print("");
}

class App {
    async run() {
        Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
        const carNamesInput = await Console.readLineAsync("");
        const carNames = carNamesInput.split(",");
        checkCarName(carNames);

        let carRacing = Array.from({length: carNames.length}, () => "");
        Console.print("시도할 횟수는 몇 회인가요?");
        const moveCount = await Console.readLineAsync("");
        if (!isNumeric(moveCount))
            throw new Error("[Error] : 입력 횟수에 숫자가 아닌 값을 입력하셨습니다.");

        Console.print("실행 결과");
        for (let i = 0; i < moveCount; i++) {
            moveJudge(carNames, carRacing);
            printCar(carNames, carRacing);
        }

        carPrize(carNames, carRacing);
    }
}

export default App;
