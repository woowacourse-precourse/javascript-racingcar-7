export default function invokeCallbackByCount(n, callback) {
  for (let i = 0; i < n; i++) {
    callback();
  }
}
