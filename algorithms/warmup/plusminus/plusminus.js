/// Hacker Rank - Warmup
/// Plus Minus
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

function plusMinus(array) {

	var positiveCount = 0;
	var negativeCount = 0;
	var zeroCount     = 0;

	for(var index = 0; index < array.length; index++) {

		if(array[index] > 0) positiveCount++;
		if(array[index] < 0) negativeCount++;
		if(array[index] == 0) zeroCount++;

	}

	console.log((positiveCount / array.length).toFixed(6));
	console.log((negativeCount / array.length).toFixed(6));
	console.log((zeroCount     / array.length).toFixed(6));

}

/// -------
/// Program

rl.on('line', function(line) {

	var array = line.split(' ').map(Number);

	plusMinus(array);

	console.log('\n');

});
