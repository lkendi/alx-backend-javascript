export default function appendToEachArrayValue(array, appendstring) {
  for (let [idx, value] of array.entries()) {
    array[idx] = appendstring + value;
  }
  return array;
}
