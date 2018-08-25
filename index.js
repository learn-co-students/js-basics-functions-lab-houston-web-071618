// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
  return Math.abs(pickupLocation - 42)
}

function distanceFromHqInFeet(pickupLocation) {
  return Math.abs(pickupLocation - 42) * 264
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
  return Math.abs(startingBlock - endingBlock) * 264
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination)
  let totalCharge = 0

  switch (true) {
    case distance > 2500:
      return('cannot travel that far')
    case distance < 400:
      totalCharge = 0
      break
    case distance > 2000:
      totalCharge = 25
      break
    case distance <= 2000:
      totalCharge += .02 * (distance - 400)
  }

  return totalCharge
}
