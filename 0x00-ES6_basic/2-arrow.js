export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  this.addNeighborhood = (newNeghborhood) => {
  this.sanFranciscoNeighborhoods.push(newNeghborhood);
  return this.sanFranciscoNeighborhoods;
  }
}
