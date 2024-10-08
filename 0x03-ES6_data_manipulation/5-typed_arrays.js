export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const array = new Int8Array(length);
  Array.fill(value, position, position + 1);
  return new DataView(array.buffer);
}
