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

function solveMeFirst(a, b) {

	return a + b;

}

/// -------
/// Program

rl.on('line', function(line) {

	var array = line.split(' ').map(Number);

	console.log(solveMeFirst(array[0], array[1]));

});
