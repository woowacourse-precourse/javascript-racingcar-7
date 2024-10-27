import { Track } from "./Model/Track.js";
import { ViewUtils } from "./Util/ViewUtils.js";
import View from "./View/View.js";

class App {
  async run() {
    try {
      const track = new Track(new View());
      await track.run();
    } catch (err) {
      ViewUtils.output(err.message);
      throw err;
    }
  }
}

export default App;
