/// Hacker Rank - Warmup
/// Solve Me First
/// Author: Carlos L. Cuenca
/// Date: 10/26/2020

/// -------------------
/// stdin Configuration

const readline = require("readline")
const rl = readline.createInterface({

	input: process.stdin,
	output: process.stdout,
	terminal: false

});

/// --------------------
/// Function Definitions

function compareTheTriplets(alice, bob) {

	var aliceSum = 0;
	var bobSum   = 0;

	for(var index = 0; index < 3; index++) {

		if(alice[index] > bob[index]) aliceSum++;
		if(alice[index] < bob[index]) bobSum++;

	}

	return [aliceSum, bobSum]

}
/// -------
/// Program

linesRead = 0;
alice = null;
bob = null;

rl.on('line', function(line) {

	if(linesRead == 0) {

		alice = line.split(' ').map(Number);

		linesRead++;

	} else if (linesRead == 1) {

		bob = line.split(' ').map(Number);

		console.log(compareTheTriplets(alice, bob));

		linesRead = 0;

	}

});
