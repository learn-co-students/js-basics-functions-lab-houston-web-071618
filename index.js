// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
let distance = (someValue < 42 ) ? 42 - someValue : someValue - 42
return distance
}

function distanceFromHqInFeet (someValue) {
  inFeet = distanceFromHqInBlocks(someValue) * 264
  return inFeet
}

function distanceTravelledInFeet (valueOne, valueTwo){
  someValue = (valueOne > valueTwo) ? valueOne - valueTwo : valueTwo - valueOne
  passangerTravels = someValue * 264
  return passangerTravels
}

function calculatesFarePrice (start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}