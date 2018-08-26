// Code your solution in this file!

function distanceFromHqInBlocks(streetNumber) {
  return Math.abs(42 - streetNumber);
}

function distanceFromHqInFeet(streetNumber) {
  return 264 * distanceFromHqInBlocks(streetNumber)
}

function distanceTravelledInFeet(startBlock, endBlock) {
  return Math.abs(endBlock - startBlock) * 264
}

function calculatesFarePrice(startBlock, endBlock) {
  let distanceToCharge = distanceTravelledInFeet(startBlock, endBlock) - 400;

  if (distanceToCharge <= 0) {
    return 0;
  } else if (distanceToCharge < 1600) {
    return distanceToCharge * 0.02;
  } else if (distanceToCharge < 2100) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
