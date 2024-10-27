import App from "./App.js";
import Input from "./view/Input.js";
import Output from "./view/Output.js";
import RacingGame from "./model/RacingGame.js";

const app = new App(Input, Output, new RacingGame());
await app.run();
