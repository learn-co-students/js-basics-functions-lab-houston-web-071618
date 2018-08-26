// Code your solution in this file!


function distanceFromHqInBlocks(location){
	return location > 42 ? location - 42 : 42 - location

}


function distanceFromHqInFeet(block){
	return distanceFromHqInBlocks(block)*264

}

function distanceTravelledInFeet(beginblock, endblock){
	return endblock > beginblock ? (endblock - beginblock)*264 : (beginblock - endblock)*264
}


function calculatesFarePrice(begin, end){
	let distance = distanceTravelledInFeet(begin, end)

	if (distance <= 400){
		return 0
	}else if (distance <= 2000){
		return (distance-400)*.02
	}else if (distance <= 2500){
		return 25
	}else {
		return 'cannot travel that far'
	}

}