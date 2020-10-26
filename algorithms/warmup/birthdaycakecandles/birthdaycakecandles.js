/// Hacker Rank - Warmup
/// Birthday Cake Candles
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

function birthdayCakeCandles(array) {

	var maximum      = 0;
	var maximumCount = 0;

	for(var index = 0; index < array.length; index++) {

		if(array[index] > maximum) {

			maximum = array[index]

			maximumCount = 1;

		} else if(array[index] == maximum) {

			maximumCount++;

		}

	}

	return maximumCount;

}

/// -------
/// Program

rl.on('line', function(line) {

	var array = line.split(' ').map(Number);

	console.log(birthdayCakeCandles(array));

});
