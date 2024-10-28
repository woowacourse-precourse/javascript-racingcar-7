class Car {
  #name;
  #distance;

  #setNameIfEmpty(name) {
    if (name === '') return (this.#name = 'null');
    return name;
  }
}

export default Car;
