import { Console } from '@woowacourse/mission-utils';
import App from './App.js';

const app = new App();
await app.run().catch(error => Console.print(error.message));
