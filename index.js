// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
  return blockNumber > 42 ? blockNumber - 42 : 42 - blockNumber;
}

function distanceFromHqInFeet(blockNumber) {
  return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet(start, destination) {
  return start < destination
    ? (destination - start) * 264
    : (start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
  return (x = distanceTravelledInFeet(start, destination)) <= 400
    ? 0
    : x <= 2000
      ? 0.02 * (x - 400)
      : x > 2000 && x < 2500
        ? 25
        : 'cannot travel that far';
}
