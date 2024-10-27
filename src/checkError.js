export default function checkError(carNameArray) {
  carNameArray.map((name) => {
    if (name.length > 5) {
      throw new Error('[ERROR]');
    }
  });
}
