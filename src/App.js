const Race = require('./Race');

class App {
    async run() {
        const race = new Race();
        await race.initializeGame(); // 게임 초기화
        race.runRace(); // 경주 실행
        race.printWinners(); // 최종 우승자 출력
    }
}

const app = new App();
app.run();
