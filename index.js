// Code your solution in this file!

function distanceFromHqInBlocks(location) {
	if (location >= 42) {
		return location - 42;
	}
	else {
		return 42 - location;
	}
}

function distanceFromHqInFeet(location) {
	x = distanceFromHqInBlocks(location);
	return x*264;
}

function distanceTravelledInFeet(start, end) {
	return Math.abs(end-start)*264;
}

function calculatesFarePrice(start, end) {
	trip = distanceTravelledInFeet(start, end);

	if (trip <= 400) {
		return 0;
	}

	else if (trip > 400 && trip <= 2000) {
		return .02*(trip-400);
	}

	else if (trip > 2000 && trip < 2500) {
		return 25;
	}

	else {
		return 'cannot travel that far';
	}
}