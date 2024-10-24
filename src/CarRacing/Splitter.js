class Splitter {
  static split(rawInput) {
    const inputs = rawInput.split(',').map(input=>input.trim());
    return inputs;
  }
}

export default Splitter;
