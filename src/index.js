import App from "./App.js";
import Input from "./view/Input.js";
import RacingGame from "./model/RacingGame.js";

const app = new App(Input, new RacingGame());
await app.run();
