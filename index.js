// Code your solution in this file!

function distanceFromHqInBlocks(home){
  let blocks = 42 - home;
  return Math.abs(blocks);
}

function distanceFromHqInFeet(home){
  let feetFromHQ = Math.abs((42 - home) * 264)
  return feetFromHQ;
}

function distanceTravelledInFeet(block1, block2){
  let feet = ((block1 - block2) * 264);
  return Math.abs(feet);
}

function calculatesFarePrice(start,destination){
  let distance = Math.abs(((destination - start)) * 264)
  console.log(distance)
  if (distance <= 400){
    return 0
  }
  else if (distance > 400 && distance <= 2000){
    return (distance-400) * 0.02
  }
  else if (distance > 2000 && distance <= 2500){
    return 25
  }
  else {
    return 'cannot travel that far'
  }
}
