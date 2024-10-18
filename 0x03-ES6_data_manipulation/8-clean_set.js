export default function cleanSet(set, startString) {
  const filteredSet = [...set].filter((value) => value.startsWith(startString));
  const cleanedSet = filteredSet.map((value) => value.slice(startString.length)).join('-');
  return cleanedSet;
}
