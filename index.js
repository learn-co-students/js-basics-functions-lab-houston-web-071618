// Code your solution in this file!
function distanceFromHqInBlocks (blockNumber) {
  if (blockNumber > 42) {
    return blockNumber - 42;
  } else {
    return 42 - blockNumber;
  }
}

function distanceFromHqInFeet(blockNumber){
  return (distanceFromHqInBlocks(blockNumber) * 264);
}

function distanceTravelledInFeet(startingBlock, endingBlock){
  return Math.abs(startingBlock - endingBlock) * 264
}

function calculatesFarePrice(startingBlock, endingBlock){
  let distance = distanceTravelledInFeet(startingBlock, endingBlock)
  let price = 0
  switch (true){
    case distance < 400 :
     price = 0;
     break;
    case distance > 400 && distance <= 2000 :
    price = ((distanceTravelledInFeet(startingBlock, endingBlock) - 400) * .02)
    break;
    case distance > 2000 && distance <= 2500:
     price = 25;
     break;
    case distance > 2500 :
    price = "cannot travel that far";
    break;
  }
  return price
}

//   if (distanceTravelledInFeet < 400){
//     return "gives customers a free sample";
//   } else if (distanceTravelledInFeet(startingBlock, endingBlock) > 400 && distanceTravelledInFeet <= 2000){
//     return "charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)";
//   } else if (distanceTravelledInFeet > 2000 &&  <= 2500){
//     return "charges 25 dollars for a distance over 2000 feet";
//   } else if (distanceTravelledInFeet > 2500){
//     return "cannot travel that far";
//   }
// }
