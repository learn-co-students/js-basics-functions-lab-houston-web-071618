// Code your solution in this file!

function distanceFromHqInBlocks(x) {
	if (x < 42) 
		return (42 - x);
	else
		return (x - 42);
}

function distanceFromHqInFeet(x) {
	return distanceFromHqInBlocks(x) * 264;
}

function distanceTravelledInFeet(x, y) {
	if (x > y)
		return ((x - y) * 264);
	else 
		return ((y - x) * 264);
}

function calculatesFarePrice(x, y) {
	z = distanceTravelledInFeet(x, y)
	if (z <= 400)
		return 0;
	else if ((400 < z) && (z <= 2000))
		return (.02 * (z - 400));
	else if ((2000 < z) && (z < 2500))
		return 25;
	else if (z > 2500)
		return "cannot travel that far";
}