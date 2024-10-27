import { Track } from "./Model/Track.js";
import { ViewUtils } from "./Util/ViewUtils.js";
import View from "./View/View.js";

class App {
  async run() {
    const track = new Track(new View());
    await track.run();
  }
}

export default App;
