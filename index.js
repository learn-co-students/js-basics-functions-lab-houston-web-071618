// Code your solution in this file!
// takes in a pickup location for a passenger, and returns the number of blocks from 42nd
// gives a number of blocks
// pass that number to another function
// takes in beginning and destination blocks // // calculates the differene of blocks
// converts blocks to feet
// returns the number of feet travelled

const blockFromHQ = 43
const beginning = 4550
const destination = 42

function distanceFromHqInBlocks(block) {
  const hq = 42
  return Math.abs(block - hq)
}

function distanceFromHqInFeet(blockFromHQ) {
  const blocks = distanceFromHqInBlocks(blockFromHQ)
  return blocks * 264
}
distanceFromHqInFeet(blockFromHQ)

function distanceTravelledInFeet(beginning, destination) {
 return Math.abs(destination - beginning) * 264
}

function calculatesFarePrice(beginning, destination) {
  let feet = distanceTravelledInFeet(beginning, destination)
  let price_per_foot
  let results
    if (feet < 400) {
      price_per_foot = 0;
      results = price_per_foot * feet
    } else if (feet > 400 && feet < 2000) {
      price_per_foot = .02;
      feet = feet - 400
      results = price_per_foot * feet
    } else if (feet > 2000 && feet < 2500) {
      price_per_foot = 25
      results = price_per_foot
    } else if (feet > 2500) {
      results = "cannot travel that far"
    }

    return results
}
calculatesFarePrice(beginning, destination)
