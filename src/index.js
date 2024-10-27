import App from './App.js';

const ERROR_MESSAGE = '[ERROR]';

const app = new App();
await app.run().catch((err) => console.log(ERROR_MESSAGE + err));
