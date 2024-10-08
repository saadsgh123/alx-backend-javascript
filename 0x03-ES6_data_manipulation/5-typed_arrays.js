export default function createInt8TypedArray(l, p, v) {
  if (p >= length) {
    throw new Error('Position outside range');
  }
  const array = new Int8Array(l);
  Array.fill(v, p, p + 1);
  return new DataView(array.buffer);
}
