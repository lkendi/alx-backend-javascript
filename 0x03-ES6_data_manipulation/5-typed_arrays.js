export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new RangeError('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const view = new Int8Array(buffer);
  view[position] = value;

  return view;
}
