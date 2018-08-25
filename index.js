// Code your solution in this file!
function distanceFromHqInBlocks(val) {
  if (val>=42) {
    return (val-42);
  } else {
    return -(val-42);
  }
}

function distanceFromHqInFeet(val) {
  return distanceFromHqInBlocks(val)*264;
}

function distanceTravelledInFeet(blk1, blk2) {
  return Math.abs((blk2-blk1)*264);
}

function calculatesFarePrice(start, destination) {
  let dist = distanceTravelledInFeet(start, destination);
  if (dist <400) {
    return 0;
  } else if (dist >= 400 && dist <2000){
    return Number((dist*.02 - 400*.02).toFixed(2));
  } else if (dist >2000 && dist <2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
