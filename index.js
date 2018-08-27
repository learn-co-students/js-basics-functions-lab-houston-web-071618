function distanceFromHqInBlocks(number){

  return Math.abs(42-number)

}

function distanceFromHqInFeet(number){

  return Math.abs(42-number)*264
}

function distanceTravelledInFeet(n1,n2){

  return Math.abs(n1-n2)*264

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
