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

function simpleArraySum(array) {

	var sum = 0;

	for(var index = 0; index < array.length; index++) {

		sum += array[index];

	}

	return sum;

}
/// -------
/// Program

linesRead = 0;
alice = null;
bob = null;

rl.on('line', function(line) {

	var array = line.split(' ').map(Number);

	console.log(simpleArraySum(array));

});
