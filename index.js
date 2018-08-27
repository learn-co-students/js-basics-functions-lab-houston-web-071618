// Code your solution in this file!

function distanceFromHqInBlocks(blockNum){
  //returns the number of blocks given a value
  return Math.abs(blockNum-42);
}

function distanceFromHqInFeet(blockNum){
  let numBlocks = distanceFromHqInBlocks(blockNum);
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to calculate feet
  let distance = numBlocks * 264;
  return distance;
}

function distanceTravelledInFeet(startValue,endValue){
  return Math.abs((startValue-endValue)*264);
}

function calculatesFarePrice(start_value, end_value){
  let fare;
  let distance = distanceTravelledInFeet(start_value,end_value)

  if (distance <= 400){
    fare = 0;
  }else if ((distance > 400) && (distance <= 2000)){
    fare = (distance-400) * .02;
  }else if ((distance > 2000) && (distance < 2500)){
    fare = 25.00;
  }else{
    fare = 'cannot travel that far';
  }
 return fare;
}
