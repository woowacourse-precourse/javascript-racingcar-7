import Input from './console/input.js';
import Output from './console/output.js';
import Racing from './racing.js';

class App {
    async run() {
        const { cars, tryCount } = await Input();

        const result = Racing(cars, tryCount);

        Output(result);
    }
}

export default App;
