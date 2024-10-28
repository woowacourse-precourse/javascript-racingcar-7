class Simulator {
  constructor(names) {
    this.names = names;
    this.state = names.reduce((arr, name) => {
      arr.push({ [name]: 0 });
      return arr;
    }, []);
  }
}

export default Simulator;
