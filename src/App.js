import {Console} from '@woowacourse/mission-utils'
import CarList from './CarList.js';

class App {
    async run() {
        let carlist = new CarList();
        await carlist.initialize();
        Console.print("실행결과");
        carlist.simulate();

        let winner = carlist.prizing();

        Console.print("최종 우승자 : " + winner.join(', '));
    }
}

export default App;
