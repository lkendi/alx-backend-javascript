export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString.length === 0) {
    return '';
  }

  const filteredSet = [...set].filter((value) => value && value.startsWith(startString));
  const cleanedSet = filteredSet.map((value) => value.slice(startString.length)).join('-');
  return cleanedSet;
}
