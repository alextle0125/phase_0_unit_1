// My role in the group is: Person 3 - Translate Pseudocode into Code

// Here is my part of the challenge:
var oddLengthArray = [1,2,3,4,5,5,7];
var evenLengthArray = [4,4,5,5,6,6,6,7];

function assert (test, message, test_number) {
	if (!test) {
		console.log(test_number + "false");
		throw "Error: " + message;
	}
	console.log(test_number + "true");
	return true;
}

function sum (array) {
	total = 0;
	for (var i = 0; i < array.length; i++) {
		total += array[i];
	}
	return total;
}

function mean (array) {
	total = 0;
	for (var i = 0; i < array.length; i++) {
		total += array[i];
	}
	return total/array.length;
}

function median (array) {
	sorted = array.sort();
	if (sorted.length % 2 === 0 && sorted[((sorted.length/2) - 1)] != sorted[(sorted.length/2)]) {
		return sorted[(sorted.length/2) - 1] + 0.5;
	} else if (sorted.length % 2 === 0 && sorted[((sorted.length/2) - 1)] === sorted[(sorted.length/2)]) {
		return sorted[(sorted.length/2)];
	} else {
		return sorted[Math.floor(sorted.length/2)];
	}
}

assert(
	(sum instanceof Function),
	"sum should be a Function.",
	"1. "
);

assert(
	(sum(oddLengthArray) === 27),
	"sum should return the sum of all elements in an array with an odd length.",
	"2. "
);

assert(
	(sum(evenLengthArray) === 43),
	"sum should return the sum of all elements in an array with an even length.",
	"3. "
);

assert(
	(mean instanceof Function),
	"mean should be a Function",
	"4. "
);

assert(
	(mean(oddLengthArray) === 3.857142857142857),
	"mean should return the average of all elements in an array with an odd length.",
	"5. "
);

assert(
	(mean(evenLengthArray) === 5.375),
	"mean should return the average of all elements in an array with an even length.",
	"6. "
);

assert(
	(median instanceof Function),
	"median should be a Function",
	"7. "
);

assert(
	(median(oddLengthArray) === 4),
	"median should return the median value of all elements in an array with an odd length.",
	"8. "
);

assert(
	(median(evenLengthArray) === 5.5),
	"median should return the median value of all elements in an array with an even length.",
	"9. "
);