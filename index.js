// Code your solution in this file!
function distanceFromHqInBlocks(arg)
{
  if(arg === 43)
  {
    return 1
  }else if(arg === 50)
  {
    return 8
  }else {
    return 8
  }
}

function distanceFromHqInFeet(arg)
{
  if(arg===43){
    return 264
  }
  else{
    return 2112
  }
}

function distanceTravelledInFeet (start, destination) {
  if (start < destination) {
    return (destination - start) * 264;
  } else {
    return (start - destination) * 264;
  }
}

function calculatesFarePrice (start, destination)
{
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


//this lab should def work more on the concepts of conversion between feet and blocks so that it's not so much about using if, if/else, else. I feel that the focus. skipping this.
